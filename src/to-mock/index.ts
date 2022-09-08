import minimatch from 'minimatch';
import { AriesConfig, Plugin } from '../interface';
import { generateOutputByPlugin } from '../core';
import SwaggerParserV2 from '../core/parseV2';

export const genMock: Plugin.Function = ({ swagger, options }) => {
  const { paths } = new SwaggerParserV2(swagger, options);
  const { pattern } = options;
  const { basePath } = swagger;
  const mockJson: Record<string, Record<string, any>> = {};
  Object.keys(paths).forEach((path) => {
    if (pattern?.some((item) => minimatch(path, item))) {
      Object.keys(paths[path]).forEach((method) => {
        mockJson[`${method.toLocaleUpperCase()} ${basePath}${path}`] =
          paths[path][method].mock.responses;
      });
    }
  });
  return JSON.stringify(mockJson, null, 2);
};

export type ToMockOptions = Pick<
  AriesConfig,
  'url' | 'pattern' | 'output' | 'autoMock' | 'formatMock'
>;

export const toMock = async (options: ToMockOptions, useRcConfig = false) =>
  generateOutputByPlugin(genMock, { ...options, useRcConfig });
