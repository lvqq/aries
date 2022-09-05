import { describe, test, expect, jest } from '@jest/globals';
import { execSync } from 'child_process';
import path from 'node:path';

jest.useFakeTimers();
const cwd = process.cwd();
const jsonUrl = path.resolve(cwd, './__tests__/input/swagger.json');
const yamlUrl = path.resolve(cwd, './__tests__/input/swagger.yml');
const outputPrefix = path.resolve(cwd, './__tests__/output.cli/');
const execCli = (params: { url: string; command: string; outfile: string }) =>
  execSync(
    `aries ${params.command} -u ${params.url} -o ${path.join(outputPrefix, params.outfile)}`,
    {
      stdio: 'inherit',
    }
  );

describe('cli_test_to_ts', () => {
  test('source_json', () => {
    expect.assertions(1);
    execCli({
      url: jsonUrl,
      command: 'to-ts',
      outfile: 'typescript.json.ts',
    });
    expect('pass').toBe('pass');
  });

  test('source_yaml', () => {
    expect.assertions(1);
    execCli({
      url: yamlUrl,
      command: 'to-ts',
      outfile: 'typescript.yaml.ts',
    });
    expect('pass').toBe('pass');
  });
});

describe('cli_test_to_request', () => {
  test('source_json', () => {
    expect.assertions(1);
    execCli({
      url: jsonUrl,
      command: 'to-request',
      outfile: 'request.json.ts',
    });
    expect('pass').toBe('pass');
  });

  test('source_yaml', () => {
    expect.assertions(1);
    execCli({
      url: yamlUrl,
      command: 'to-request',
      outfile: 'request.yaml.ts',
    });
    expect('pass').toBe('pass');
  });
});

describe('cli_test_to_md', () => {
  test('source_json', () => {
    expect.assertions(1);
    execCli({
      url: jsonUrl,
      command: 'to-md',
      outfile: 'markdown.json.md',
    });
    expect('pass').toBe('pass');
  });

  test('source_yaml', () => {
    expect.assertions(1);
    execCli({
      url: yamlUrl,
      command: 'to-md',
      outfile: 'markdown.yaml.md',
    });
    expect('pass').toBe('pass');
  });
});

describe('cli_test_to_mock', () => {
  test('source_json', () => {
    expect.assertions(1);
    execCli({
      url: jsonUrl,
      command: 'to-mock',
      outfile: 'mock.json.json',
    });
    expect('pass').toBe('pass');
  });

  test('source_yaml', () => {
    expect.assertions(1);
    execCli({
      url: yamlUrl,
      command: 'to-mock',
      outfile: 'mock.yaml.json',
    });
    expect('pass').toBe('pass');
  });
});
