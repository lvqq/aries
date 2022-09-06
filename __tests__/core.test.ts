import { describe, test, expect } from '@jest/globals';
import path from 'node:path';
import { generateOptionsAndSwagger } from '../src/core';

const cwd = process.cwd();
const url = path.resolve(cwd, './__tests__/input/swagger.json');

describe('core_test', () => {
  test('generate_swagger_options', async () => {
    const result = await generateOptionsAndSwagger({
      url,
    });
    expect(result).toBeDefined();
  });

  test('generate_swagger_rcconfig', async () => {
    const result = await generateOptionsAndSwagger({
      url,
      useRcConfig: true,
    });
    expect(result).toBeDefined();
  });
});
