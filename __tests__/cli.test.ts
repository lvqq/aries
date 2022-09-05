/* eslint-disable import/no-extraneous-dependencies */
import { describe, test, expect } from '@jest/globals';
import { execSync } from 'child_process';
import path from 'node:path';

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
  test('from_json', () => {
    expect(
      execCli({
        url: jsonUrl,
        command: 'to-ts',
        outfile: 'typescript.json.ts',
      })
    ).toBe(null);
  });

  test('from_yaml', () => {
    expect(
      execCli({
        url: yamlUrl,
        command: 'to-ts',
        outfile: 'typescript.yaml.ts',
      })
    ).toBe(null);
  });
});

describe('cli_test_to_request', () => {
  test('from_json', () => {
    expect(
      execCli({
        url: jsonUrl,
        command: 'to-request',
        outfile: 'request.json.ts',
      })
    ).toBe(null);
  });

  test('from_yaml', () => {
    expect(
      execCli({
        url: yamlUrl,
        command: 'to-request',
        outfile: 'request.yaml.ts',
      })
    ).toBe(null);
  });
});

describe('cli_test_to_md', () => {
  test('from_json', () => {
    expect(
      execCli({
        url: jsonUrl,
        command: 'to-md',
        outfile: 'markdown.json.md',
      })
    ).toBe(null);
  });

  test('from_yaml', () => {
    expect(
      execCli({
        url: yamlUrl,
        command: 'to-md',
        outfile: 'markdown.yaml.md',
      })
    ).toBe(null);
  });
});

describe('cli_test_to_mock', () => {
  test('from_json', () => {
    expect(
      execCli({
        url: jsonUrl,
        command: 'to-mock',
        outfile: 'mock.json.json',
      })
    ).toBe(null);
  });

  test('from_yaml', () => {
    expect(
      execCli({
        url: yamlUrl,
        command: 'to-mock',
        outfile: 'mock.yaml.json',
      })
    ).toBe(null);
  });
});
