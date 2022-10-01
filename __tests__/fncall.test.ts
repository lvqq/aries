import { describe, test, expect, beforeAll } from '@jest/globals';
import path from 'node:path';
import fs from 'node:fs';
import { toMd, toMock, toRequest, toTs } from '../src';

const url = path.resolve('./__tests__/input/swagger.json');
const outputPrefix = path.resolve('./__tests__/output');

describe('fncall_test', () => {
  beforeAll(async () => {
    if (fs.existsSync(outputPrefix)) {
      await fs.promises.rm(outputPrefix, { recursive: true });
    }
    await fs.promises.mkdir(outputPrefix);
  });

  test('to_ts', async () => {
    expect.assertions(1);
    await toTs({
      url,
      output: path.join(outputPrefix, 'typescript.ts'),
      autoRequired: true,
    });
    expect('pass').toBe('pass');
  });

  test('to_request', async () => {
    expect.assertions(1);
    await toRequest({
      url,
      output: path.join(outputPrefix, 'request.ts'),
      autoRequired: true,
    });
    expect('pass').toBe('pass');
  });

  test('to_md', async () => {
    expect.assertions(1);
    await toMd({
      url,
      output: path.join(outputPrefix, 'markdown.md'),
      autoMock: false,
      formatMock: (data) => ({
        code: 0,
        msg: 'success',
        data,
      }),
    });
    expect('pass').toBe('pass');
  });

  test('to_mock', async () => {
    expect.assertions(1);
    await toMock({
      url,
      output: path.join(outputPrefix, 'mock.json'),
      autoMock: false,
      formatMock: (data) => ({
        code: 0,
        msg: 'success',
        data,
      }),
    });
    expect('pass').toBe('pass');
  });
});
