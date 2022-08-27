import path from 'node:path';
import fs from 'node:fs'
import chalk from 'chalk'
import ora from 'ora'
import axios from 'axios';
import yaml from 'js-yaml';
import { AriesConfig, Plugin } from '../interface';

const cwd = process.cwd();
/**
 * merge .ariesrc.js and command options
 * @param {*} options command options
 */
const mergeOptionsFromRc = async (options: Partial<AriesConfig>) => {
  let ariesrc: Partial<AriesConfig>;
  try {
    const rcpath = path.resolve(cwd, '.ariesrc');
    if (fs.existsSync(`${rcpath}.ts`)) {
      ariesrc = await import(rcpath)
    } else {
      ariesrc = require(rcpath);
    }
  } catch (e) {
    ariesrc = {};
  }

  return {
    ...ariesrc,
    ...options,
  };
};

/**
 * generate swagger json and config from command options
 * @param {*} options command options
 */
export const generateOptionsAndSwagger = async (options: Partial<AriesConfig>) => {
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
        swagger = require(path.resolve(cwd, url));
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
export const generateOutputByPlugin = async (fn: Plugin.Function, options: Partial<AriesConfig>) => {
  let params: Plugin.Params;
  let spinner = ora(chalk.blueBright('Fetch swagger json start')).start();
  try {
    // fetch swagger and generate options
    params = await generateOptionsAndSwagger(options);
    spinner.succeed(chalk.greenBright('Fetch swagger json success'));
  } catch (e) {
    spinner.fail(chalk.redBright('Fetch swagger json failed'));
    console.log(chalk.redBright((e as Error).message));
  }
  // generate file
  try {
    if (params!) {
      spinner = ora(chalk.blueBright('Generate file start')).start();
      const output = await fn(params);
      if (Array.isArray(output)) {
        output.forEach((item) => {
          fs.writeFileSync(path.join(params.options.output || '', item.filename), item.content);
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
