const path = require('path');
const cwd = process.cwd();
const fetch = require('node-fetch');
const fs = require('fs');
const chalk = require('chalk');
const ora = require('ora');


/**
 * merge .ariesrc.js and command options
 * @param {*} options command options
 */
const mergeOptionsFromRc = (options) => {
  let ariesrc;
  try {
    ariesrc = require(path.resolve(cwd, '.ariesrc'))
  }catch(e) {
    ariesrc = {}
  }

  return {
    ...ariesrc,
    ...options
  }
}

/**
 * generate swagger json and config from command options
 * @param {*} options command options
 */
const generateOptions = async (options) => {
  const params = mergeOptionsFromRc(options)
  const url = params.url;
  // validate url
  if (!url) throw new Error("error: required swagger url not specified, add '-u, --url <url>' in command option or url config .ariesrc");
  // get swagger json
  let swagger;
  if(url.startsWith('http')) {
    const res = await fetch(url, { method: 'get' })
    if (!res.ok) {
      throw new Error('error: fetch swagger json failed, check if url is valid')
    }
    swagger = await res.json();
  } else {
    try {
      swagger = require(path.resolve(cwd, url))
    }catch(e) {
      throw new Error('error: require swagger json failed, check if url is valid')
    } 
  }
  return {
    swagger,
    options: params,
  }
}

/**
 * beautify output message and write output to file
 * @param {*} fn plugin function 
 * @param {*} options command options
 */
const generateOutputByPlugin = async (fn, options) => {
  let spinner;
  let params;
  try {
    spinner = ora(chalk.blueBright('Fetch swagger json start')).start()
    params = await generateOptions(options);
    spinner.succeed(chalk.greenBright('Fetch swagger json success'))
  } catch(e) {
    spinner.fail(chalk.redBright('Fetch swagger json failed'))
    console.log(chalk.redBright(e.message))
  }
  if (params) {
    const output = await fn(params);
    fs.writeFileSync(params.options.output, output, 'utf8');
  }
}

module.exports = {
  generateOptions,
  generateOutputByPlugin,
}