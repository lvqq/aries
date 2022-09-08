import { Command } from 'commander';
import * as pkg from '../package.json';
import { toTs, toRequest, toMd, toMock, mockServer } from '../src';

const createProgram = () => {
  const program = new Command();

  program.version(pkg.version);
  program.usage('<command> [options]');

  program.arguments('<command>').action(() => {
    program.outputHelp();
  });

  program
    .command('to-ts')
    .description('Convert swagger to typescript declaration')
    .option('-u, --url <url>', 'Swagger link to generate, support relative path or remote url')
    .option('-o --output <output>', 'Specify output file path', './swagger.types.ts')
    .option(
      '-p --pattern <pattern...>',
      'Pattern to be matched for request path, support glob rule'
    )
    .option(
      '--no-autoRequired',
      'Do not generate the property as required automatically when there is no required array in definitions'
    )
    .action(async (options) => {
      await toTs(options, true);
    });

  program
    .command('to-request')
    .description(
      'Convert swagger to request function, generate <output> file and <output>.types file'
    )
    .option('-u, --url <url>', 'Swagger link to generate, support relative path or remote url')
    .option('-o --output <output>', 'Specify output file path', './swagger.request.ts')
    .option(
      '-p --pattern <pattern...>',
      'Pattern to be matched for request path, support glob rule'
    )
    .option(
      '--no-autoRequired',
      'Do not generate the property as required automatically when there is no required array in definitions'
    )
    .action(async (options) => {
      await toRequest(options, true);
    });

  program
    .command('to-md')
    .description('Convert swagger to markdown docs')
    .option('-u, --url <url>', 'Swagger link to generate, support relative path or remote url')
    .option('-o --output <output>', 'Specify output file path', './swagger.docs.md')
    .option(
      '-p --pattern <pattern...>',
      'Pattern to be matched for request path, support glob rule'
    )
    .option(
      '--no-autoMock',
      'Do not generate the mock samples automatically when there is no example in schema'
    )
    .action(async (options) => {
      await toMd(options, true);
    });

  program
    .command('to-mock')
    .description('Convert swagger to mock json')
    .option('-u, --url <url>', 'Swagger link to generate, support relative path or remote url')
    .option('-o --output <output>', 'Specify output file path', './swagger.mock.json')
    .option(
      '-p --pattern <pattern...>',
      'Pattern to be matched for request path, support glob rule'
    )
    .option(
      '--no-autoMock',
      'Do not generate the mock response automatically when there is no example in schema'
    )
    .action(async (options) => {
      await toMock(options, true);
    });

  program
    .command('mock-server')
    .description('Start a local server to return the mock interface')
    .option('-u, --url <url>', 'Swagger link, support relative path or remote url')
    .option(
      '-p --pattern <pattern...>',
      'Pattern to be matched for request path, support glob rule'
    )
    .option('-p, --port <port>', 'Mock server port', '3000')
    .option(
      '--no-autoMock',
      'Do not generate the mock response automatically when there is no example in schema'
    )
    .action(async (options) => {
      await mockServer(options, true);
    });

  return program;
};

export { createProgram };
