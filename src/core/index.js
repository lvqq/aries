const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const ora = require('ora');
const axios = require('axios');

const cwd = process.cwd();
/**
 * merge .ariesrc.js and command options
 * @param {*} options command options
 */
const mergeOptionsFromRc = (options) => {
  let ariesrc;
  try {
    ariesrc = require(path.resolve(cwd, '.ariesrc'));
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
const generateOptions = async (options) => {
  const params = mergeOptionsFromRc(options);
  const { url } = params;
  // validate url
  if (!url) {
    throw new Error(
      'error: required swagger url not specified, add \'-u, --url <url>\' in command option or url config .ariesrc',
    );
  }
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
      swagger = require(path.resolve(cwd, url));
    } catch (e) {
      throw new Error('error: require swagger json failed, check if url is valid');
    }
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
const generateOutputByPlugin = async (fn, options) => {
  let spinner;
  try {
    // fetch swagger and generate options
    spinner = ora(chalk.blueBright('Fetch swagger json start')).start();
    const params = await generateOptions(options);
    spinner.succeed(chalk.greenBright('Fetch swagger json success'));
    // generate file
    if (params) {
      const output = await fn(params);
      if (Array.isArray(output)) {
        output.forEach((item) => {
          fs.writeFileSync(path.join(params.options.output, item.filename), item.content);
        });
      } else {
        fs.writeFileSync(params.options.output, output, 'utf8');
      }
      spinner.succeed(chalk.greenBright('Generate file success'));
    }
  } catch (e) {
    spinner.fail(chalk.redBright('Fetch swagger json failed'));
    // eslint-disable-next-line no-console
    console.log(chalk.redBright(e.message));
  }
};

module.exports = {
  generateOptions,
  generateOutputByPlugin,
};
