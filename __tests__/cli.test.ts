import { describe, test, expect } from '@jest/globals';
import { execSync } from 'child_process';
import path from 'node:path';

const cwd = process.cwd();
const url = path.resolve(cwd, './__tests__/input/swagger.json');
const outputPrefix = path.resolve(cwd, './__tests__/output.cli/');
const execCli = (params: { url: string; command: string; outfile: string }) =>
  execSync(
    `aries ${params.command} -u ${params.url} -o ${path.join(outputPrefix, params.outfile)}`,
    {
      stdio: 'inherit',
    }
  );

describe('cli_test', () => {
  test('to_ts', () => {
    expect.assertions(1);
    execCli({
      url,
      command: 'to-ts',
      outfile: 'typescript.ts',
    });
    expect('pass').toBe('pass');
  });

  test('to_request', () => {
    expect.assertions(1);
    execCli({
      url,
      command: 'to-request',
      outfile: 'request.ts',
    });
    expect('pass').toBe('pass');
  });

  test('to_md', () => {
    expect.assertions(1);
    execCli({
      url,
      command: 'to-md',
      outfile: 'markdown.md',
    });
    expect('pass').toBe('pass');
  });

  test('to_mock', () => {
    expect.assertions(1);
    execCli({
      url,
      command: 'to-mock',
      outfile: 'mock.json',
    });
    expect('pass').toBe('pass');
  });
});
