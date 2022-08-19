#!/usr/bin/env node
const program = require('commander');
const { version } = require('../package.json');
const { toTs, toMd, toMock, mockServer } = require('../src');

process.on('unhandledRejection', (err) => {
  throw err;
});

program.version(version).usage('<command> [options]');

program.arguments('<command>').action(() => {
  program.outputHelp();
});

program
  .command('to-ts')
  .description('Convert swagger to typescript declaration')
  .option('-u, --url <url>', 'Swagger link to generate, support relative path or remote url')
  .option('-o --output <output>', 'Specify output file path', './swagger.types.ts')
  .option(
    '--no-autoRequired',
    'Do not generate the property as required automatically when there is no required array in definitions'
  )
  .action(async (options) => {
    await toTs(options)
  });

program
  .command('to-md')
  .description('Convert swagger to markdown docs')
  .option('-u, --url <url>', 'Swagger link to generate, support relative path or remote url')
  .option('-o --output <output>', 'Specify output file path', './swagger.docs.md')
  .option(
    '--no-autoMock',
    'Do not generate the mock samples automatically when there is no example in schema'
  )
  .action(async (options) => {
    await toMd(options)
  });

program
  .command('to-mock')
  .description('Convert swagger to mock json')
  .option('-u, --url <url>', 'Swagger link to generate, support relative path or remote url')
  .option('-o --output <output>', 'Specify output file path', './swagger.mock.json')
  .option(
    '--no-autoMock',
    'Do not generate the mock response automatically when there is no example in schema'
  )
  .action(async (options) => {
    await toMock(options)
  });

program
  .command('mock-server')
  .description('Start a local server to return the mock interface')
  .option('-u, --url <url>', 'Swagger link, support relative path or remote url')
  .option('-p, --port <port>', 'Mock server port', 3000)
  .option(
    '--no-autoMock',
    'Do not generate the mock response automatically when there is no example in schema'
  )
  .action(async (options) => {
    await mockServer(options);
  });

program.parse(process.argv);
