/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, test, expect, jest } from '@jest/globals';
import path from 'node:path';
import {
  loadConfigFromBundle,
  generateOptionsAndSwagger,
  generateOutputByPlugin,
} from '../src/core';

const jsonUrl = path.resolve('./__tests__/input/swagger.json');
const yamlUrl = path.resolve('./__tests__/input/swagger.yml');
const onlineUrl = 'https://petstore.swagger.io/v2/swagger.json';
const notFoundUrl = 'http://localhost:8080/404/not_found';
const notFoundPath = './404/not_found';

describe('load_config_test', () => {
  test('cjs', async () => {
    const result = await loadConfigFromBundle(
      path.resolve('test-cjs'),
      'module.exports.default = 1',
      false
    );
    expect(result).toBe(1);
  });
});

describe('generate_options_test', () => {
  test('from_json', async () => {
    const result = await generateOptionsAndSwagger({
      url: jsonUrl,
    });
    expect(result).toBeDefined();
  });

  test('from_yaml', async () => {
    const result = await generateOptionsAndSwagger({
      url: yamlUrl,
    });
    expect(result).toBeDefined();
  });

  test('from_online', async () => {
    const result = await generateOptionsAndSwagger({
      url: onlineUrl,
    });
    expect(result).toBeDefined();
  }, 30000);

  test('use_rcconfig', async () => {
    const result = await generateOptionsAndSwagger({
      url: jsonUrl,
      useRcConfig: true,
    });
    expect(result).toBeDefined();
  });
});

describe('generate_options_error_test', () => {
  test('url_not_specified', async () => {
    try {
      await generateOptionsAndSwagger({
        url: '',
      });
    } catch (e: any) {
      expect(e.message).toBe(
        "required swagger url not specified, add '-u, --url <url>' in command option or add url in .ariesrc"
      );
    }
  });

  test('fetch_url_failed', async () => {
    try {
      await generateOptionsAndSwagger({
        url: notFoundUrl,
      });
    } catch (e: any) {
      expect(e.message).toBe(`fetch swagger json failed, check if url is valid: ${notFoundUrl}`);
    }
  });

  test('require_url_failed', async () => {
    try {
      await generateOptionsAndSwagger({
        url: notFoundPath,
      });
    } catch (e: any) {
      expect(e.message).toBe(`require swagger json failed, check if url is valid: ${notFoundPath}`);
    }
  });
});

describe('generate_output_error_test', () => {
  test('require_url_failed', async () => {
    const mockPlugin = jest.fn(() => '');
    try {
      await generateOutputByPlugin(mockPlugin as any, {
        url: notFoundPath,
      });
    } catch (e: any) {
      expect(e.message).toBe(`require swagger json failed, check if url is valid: ${notFoundPath}`);
    }
    expect(mockPlugin).toHaveBeenCalledTimes(0);
  });

  test('generate_file_failed', async () => {
    const mockPlugin = jest.fn(() => '');
    try {
      await generateOutputByPlugin(mockPlugin as any, {
        url: jsonUrl,
        output: notFoundPath,
      });
    } catch (e: any) {
      expect(e.message).toBeDefined();
    }
    expect(mockPlugin).toHaveBeenCalledTimes(1);
  });
});
