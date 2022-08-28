import { AriesConfig, Plugin } from '../interface';
import { generateOutputByPlugin } from '../core';
import SwaggerParserV2 from '../core/parseV2';

export const genMock: Plugin.Function = ({ swagger, options }) => {
  const { paths } = new SwaggerParserV2(swagger, options);
  const { basePath } = swagger;
  const mockJson: Record<string, Record<string, any>> = {};
  Object.keys(paths).forEach((path) => {
    Object.keys(paths[path]).forEach((method) => {
      mockJson[`${method.toLocaleUpperCase()} ${basePath}${path}`] =
        paths[path][method].mock.responses;
    });
  });
  return JSON.stringify(mockJson, null, 2);
};

export type ToMockOptions = Pick<AriesConfig, 'url' | 'output' | 'autoMock' | 'formatMock'>;

export const toMock = async (options: ToMockOptions) => generateOutputByPlugin(genMock, options);
