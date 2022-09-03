import path from 'node:path';
import fs from 'node:fs';
import chalk from 'chalk';
import ora from 'ora';
import axios from 'axios';
import yaml from 'js-yaml';
import { build } from 'esbuild';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import { AriesConfig, Plugin } from '../interface';
import { DEFAULT_CONFIG_FILES, DEFAULT_CONFIG_OPTION_TRUE } from '../constants';

const cwd = process.cwd();
const _require = import.meta.url ? createRequire(import.meta.url) : require;
const dynamicImport = new Function('file', 'return import(file)');
type OptionalConfig = Partial<AriesConfig>;

const loadConfigFromBundle = async (
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
    fs.writeFileSync(esmFileTemp, bundledCode);
    try {
      return (await dynamicImport(esmFileUrl)).default;
    } finally {
      try {
        fs.unlinkSync(esmFileTemp);
      } catch (e) {
        // catch error
      }
    }
  }
  // for cjs
  else {
    const cjsFileTemp = `${fileTemp}.cjs`;
    fs.writeFileSync(cjsFileTemp, bundledCode);
    try {
      return _require(cjsFileTemp).default;
    } finally {
      try {
        fs.unlinkSync(cjsFileTemp);
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
const mergeOptionsFromRc = async (options: OptionalConfig) => {
  // file .areisrc resolved path
  let resolvedPath: string | undefined;
  // .ariesrc config
  let ariesrc: OptionalConfig;
  for (const filename of DEFAULT_CONFIG_FILES) {
    const filePath = path.resolve(cwd, filename);
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
      const pkg = _require(path.resolve(cwd, 'package.json'));
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
      external: ['require.resolve'],
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
export const generateOptionsAndSwagger = async (options: OptionalConfig) => {
  const params = await mergeOptionsFromRc(options);
  const { url } = params;
  // validate url
  if (!url) {
    throw new Error(
      "error: required swagger url not specified, add '-u, --url <url>' in command option or add url in .ariesrc"
    );
  }
  const isYaml = url.endsWith('.yaml') || url.endsWith('.yml');
  // get swagger json
  let swagger;
  if (url.startsWith('http')) {
    try {
      swagger = (await axios.get(url)).data;
    } catch (e) {
      throw new Error('error: fetch swagger json failed, check if url is valid');
    }
  } else {
    try {
      if (isYaml) {
        swagger = fs.readFileSync(path.resolve(cwd, url), 'utf-8');
      } else {
        swagger = _require(path.resolve(cwd, url));
      }
    } catch (e) {
      throw new Error('error: require swagger json failed, check if url is valid');
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
export const generateOutputByPlugin = async (fn: Plugin.Function, options: OptionalConfig) => {
  let params: Plugin.Params;
  let spinner = ora(chalk.blueBright('Fetch swagger json start')).start();
  try {
    // fetch swagger and generate options
    params = await generateOptionsAndSwagger(options);
    spinner.succeed(chalk.greenBright('Fetch swagger json success'));
  } catch (e) {
    spinner.fail(chalk.redBright('Fetch swagger json failed'));
    console.log(e);
  }
  // generate file
  try {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (params!) {
      spinner = ora(chalk.blueBright('Generate file start')).start();
      const output = await fn(params);
      if (Array.isArray(output)) {
        output.forEach((item) => {
          fs.writeFileSync(
            path.join(
              params.options.output ? params.options.output.split('/').slice(0, -1).join('/') : '',
              item.filename
            ),
            item.content
          );
        });
      } else {
        fs.writeFileSync(params.options.output || '', output, 'utf8');
      }
      spinner.succeed(chalk.greenBright('Generate file success'));
    }
  } catch (e) {
    spinner.fail(chalk.redBright('Generate file failed'));
    console.log(e);
  }
};
