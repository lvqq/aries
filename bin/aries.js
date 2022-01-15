#!/usr/bin/env node
const program = require('commander');
const { version } = require('../package.json');
const {
  toTs, toMd, toMock,
} = require('../src');
const { generateOutputByPlugin } = require('../src/core');

process.on('unhandledRejection', (err) => {
  throw err;
});

program
  .version(version)
  .usage('<command> [options]');

program
  .arguments('<command>')
  .action(() => {
    program.outputHelp();
  });

program
  .command('to-ts')
  .description('Convert swagger to typescript declaration')
  .option('-u, --url <url>', 'Swagger link to generate, support relative path or remote url')
  .option('-o --output <output>', 'Specify output file path, default is ./swagger.types.ts', './swagger.types.ts')
  .option(
    '--no-autoRequired',
    'Do not generate the property as required automatically when there is no required array in definitions',
  )
  .action(async (options) => {
    await generateOutputByPlugin(toTs, options);
  });

program
  .command('to-md')
  .description('Convert swagger to markdown docs')
  .option('-u, --url <url>', 'Swagger link to generate, support relative path or remote url')
  .option('-o --output <output>', 'Specify output file path, default is ./swagger.docs.md', './swagger.docs.md')
  .option(
    '--no-autoMock',
    'Do not generate the mock samples automatically when there is no example in schema',
  )
  .action(async (options) => {
    await generateOutputByPlugin(toMd, options);
  });

program
  .command('to-mock')
  .description('Convert swagger to mock json')
  .option('-u, --url <url>', 'Swagger link to generate, support relative path or remote url')
  .option('-o --output <output>', 'Specify output file path, default is ./swagger.mock.json', './swagger.mock.json')
  .option(
    '--no-autoMock',
    'Do not generate the mock response automatically when there is no example in schema',
  )
  .action(async (options) => {
    await generateOutputByPlugin(toMock, options);
  });

program.parse(process.argv);
