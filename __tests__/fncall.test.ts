import { describe, test, expect, jest } from '@jest/globals';
import path from 'node:path';
import { toMd, toMock, toRequest, toTs } from '../src';

jest.useFakeTimers();
const cwd = process.cwd();
const jsonUrl = path.resolve(cwd, './__tests__/input/swagger.json');
const yamlUrl = path.resolve(cwd, './__tests__/input/swagger.yml');
const outputPrefix = path.resolve(cwd, './__tests__/output.fncall/');

describe('fncall_test_to_ts', () => {
  const testToTs = async (params: { url: string; outfile: string }) => {
    expect.assertions(1);
    await toTs({
      url: params.url,
      output: path.join(outputPrefix, params.outfile),
      autoRequired: true,
    });
    expect('pass').toBe('pass');
  };

  test('source_json', () => testToTs({ url: jsonUrl, outfile: 'typescript.json.ts' }));
  test('source_yaml', () => testToTs({ url: yamlUrl, outfile: 'typescript.yaml.ts' }));
});

describe('fncall_test_to_request', () => {
  const testToMd = async (params: { url: string; outfile: string }) => {
    expect.assertions(1);
    await toRequest({
      url: params.url,
      output: path.join(outputPrefix, params.outfile),
      autoRequired: true,
    });
    expect('pass').toBe('pass');
  };

  test('source_json', () => testToMd({ url: jsonUrl, outfile: 'request.json.ts' }));
  test('source_yaml', () => testToMd({ url: yamlUrl, outfile: 'request.yaml.ts' }));
});

describe('fncall_test_to_md', () => {
  const testToMd = async (params: { url: string; outfile: string }) => {
    expect.assertions(1);
    await toMd({
      url: params.url,
      output: path.join(outputPrefix, params.outfile),
      autoMock: false,
      formatMock: (data) => ({
        code: 0,
        msg: 'success',
        data,
      }),
    });
    expect('pass').toBe('pass');
  };

  test('source_json', () => testToMd({ url: jsonUrl, outfile: 'markdown.json.md' }));
  test('source_yaml', () => testToMd({ url: yamlUrl, outfile: 'markdown.yaml.md' }));
});

describe('fncall_test_to_mock', () => {
  const testToMd = async (params: { url: string; outfile: string }) => {
    expect.assertions(1);
    await toMock({
      url: params.url,
      output: path.join(outputPrefix, params.outfile),
      autoMock: false,
      formatMock: (data) => ({
        code: 0,
        msg: 'success',
        data,
      }),
    });
    expect('pass').toBe('pass');
  };

  test('source_json', () => testToMd({ url: jsonUrl, outfile: 'mock.json.json' }));
  test('source_yaml', () => testToMd({ url: yamlUrl, outfile: 'mock.yaml.json' }));
});
