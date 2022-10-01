import path, { sep } from 'node:path';
import fs from 'node:fs';
import chalk from 'chalk';
import ora from 'ora';
import axios from 'axios';
import yaml from 'js-yaml';
import { build } from 'esbuild';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import type { AriesConfig, Plugin } from '../interface';
import { DEFAULT_CONFIG_FILES, DEFAULT_CONFIG_OPTION_TRUE, DEFAULT_PATTERN } from '../constants';

const cwd = process.cwd();
const _require = import.meta.url ? createRequire(import.meta.url) : require;
const dynamicImport = new Function('file', 'return import(file)');
export type OptionalConfig = Partial<AriesConfig>;

export const loadConfigFromBundle = async (
  fileName: string,
  bundledCode: string,
  isESM: boolean
): Promise<OptionalConfig> => {
  // create template
  const fileTemp = `${fileName}.timestamp-${Date.now()}`;
  // for esm
  if (isESM) {
    const esmFileTemp = `${fileTemp}.mjs`;
    const esmFileUrl = `${pathToFileURL(fileTemp)}.mjs`;
    await fs.promises.writeFile(esmFileTemp, bundledCode);
    try {
      return (await dynamicImport(esmFileUrl)).default;
    } finally {
      try {
        await fs.promises.unlink(esmFileTemp);
      } catch (e) {
        // catch error
      }
    }
  }
  // for cjs
  else {
    const cjsFileTemp = `${fileTemp}.cjs`;
    await fs.promises.writeFile(cjsFileTemp, bundledCode);
    try {
      return _require(cjsFileTemp).default;
    } finally {
      try {
        await fs.promises.unlink(cjsFileTemp);
      } catch (e) {
        // catch error
      }
    }
  }
};

/**
 * merge .ariesrc.js and command options
 * @param {*} options command options
 */
export const mergeOptionsFromRc = async (options: OptionalConfig) => {
  // file .areisrc resolved path
  let resolvedPath: string | undefined;
  // .ariesrc config
  let ariesrc: OptionalConfig;
  for (const filename of DEFAULT_CONFIG_FILES) {
    const filePath = path.resolve(filename);
    if (!fs.existsSync(filePath)) continue;
    resolvedPath = filePath;
    break;
  }
  if (!resolvedPath) {
    ariesrc = {};
  } else {
    let isESM = false;
    if (/\.m[jt]s$/.test(resolvedPath)) {
      isESM = true;
    } else if (/\.c[jt]s$/.test(resolvedPath)) {
      isESM = false;
    } else {
      const pkg = _require(path.resolve('package.json'));
      isESM = !!pkg && pkg?.type === 'module';
    }
    const output = await build({
      entryPoints: [resolvedPath],
      format: isESM ? 'esm' : 'cjs',
      outfile: 'out.js',
      target: 'esnext',
      platform: 'node',
      write: false,
      bundle: true,
      treeShaking: true,
      sourcemap: 'inline',
      // to fix warning:  [WARNING] "esbuild" should be marked as external for use with "require.resolve" [require-resolve-not-external]
      external: ['esbuild'],
      banner: {
        //  to solve 'Dynamic require of "os" is not supported', refer: https://github.com/evanw/esbuild/issues/1921
        js: isESM
          ? `
import path from "node:path";
import { fileURLToPath } from "node:url";
const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
`
          : '',
      },
    });
    const { text } = output.outputFiles[0];
    ariesrc = await loadConfigFromBundle(resolvedPath, text, isESM);
  }
  const rc = {
    ...ariesrc,
    ...options,
  };
  // --no-xx will set true by default, handle rc option to overwrite it
  DEFAULT_CONFIG_OPTION_TRUE.forEach((option) => {
    if (ariesrc[option] !== undefined && options[option] === true) {
      rc[option] = ariesrc[option];
    }
  });
  return rc;
};

/**
 * generate swagger json and config from command options
 * @param {*} options command options
 */
export const generateOptionsAndSwagger = async (
  options: OptionalConfig & { useRcConfig?: boolean }
) => {
  // use config from .ariesrc, default is true
  const { useRcConfig } = options;
  const params = useRcConfig ? await mergeOptionsFromRc(options) : options;
  // transform relative path to absolute path
  if (params.output && !path.isAbsolute(params.output)) {
    params.output = path.resolve(params.output);
  }
  if (!params.pattern?.length) {
    params.pattern = DEFAULT_PATTERN;
  }
  const { url } = params;
  // validate url
  if (!url) {
    throw new Error(
      "required swagger url not specified, add '-u, --url <url>' in command option or add url in .ariesrc"
    );
  }
  const isYaml = url.endsWith('.yaml') || url.endsWith('.yml');
  // get swagger json
  let swagger;
  if (url.startsWith('http')) {
    try {
      swagger = (await axios.get(url)).data;
    } catch (e) {
      throw new Error(`fetch swagger json failed, check if url is valid: ${url}`);
    }
  } else {
    try {
      if (isYaml) {
        swagger = await fs.promises.readFile(path.resolve(url), 'utf-8');
      } else {
        swagger = _require(path.resolve(url));
      }
    } catch (e) {
      throw new Error(`require swagger json failed, check if url is valid: ${url}`);
    }
  }
  // yaml to json
  if (isYaml) {
    swagger = yaml.load(swagger);
  }
  return {
    swagger,
    options: params,
  };
};

/**
 * beautify output message and write output to file
 * @param {*} fn plugin function
 * @param {*} options command options
 */
export const generateOutputByPlugin = async (
  fn: Plugin.Function,
  options: OptionalConfig & { useRcConfig?: boolean }
): Promise<void> => {
  let params: Plugin.Params;
  let spinner = ora(chalk.blueBright('Fetch swagger json start')).start();
  try {
    // fetch swagger and generate options
    params = await generateOptionsAndSwagger(options);
    spinner.succeed(chalk.greenBright('Fetch swagger json success'));
  } catch (e) {
    spinner.fail(chalk.redBright('Fetch swagger json failed'));
    throw e;
  }
  // generate file
  try {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (params!) {
      spinner = ora(chalk.blueBright('Generate file start')).start();
      const output = await fn(params);
      if (Array.isArray(output)) {
        await Promise.all(
          output.map((item) =>
            fs.promises.writeFile(
              path.resolve(
                params.options.output
                  ? params.options.output.split(sep).slice(0, -1).join(sep)
                  : '',
                item.filename
              ),
              item.content
            )
          )
        );
      } else {
        await fs.promises.writeFile(
          params.options.output ? path.resolve(params.options.output) : cwd,
          output,
          'utf8'
        );
      }
      spinner.succeed(chalk.greenBright('Generate file success'));
    }
  } catch (e) {
    spinner.fail(chalk.redBright('Generate file failed'));
    throw e;
  }
};
