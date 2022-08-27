import { AriesConfig, Plugin } from '../interface';
import { generateOutputByPlugin } from '../core';
import SwaggerParserV2 from '../core/parseV2'

const genTs: Plugin.Function =  async ({ swagger, options }) => {
  const { definitions, paths } = new SwaggerParserV2(swagger, options);
  // ts in models
  const definitionsTs = Object.keys(definitions).map((name) => {
    const tsSchema = definitions[name].ts;
    if (tsSchema.type === 'interface') {
      return `export interface ${tsSchema.name} ${tsSchema.value}\n`;
    }
    return `export type ${tsSchema.name} = ${tsSchema.value};\n`;
  });
  // ts in path parameters and responses
  const pathsTs = Object.keys(paths).map((path) => {
    const pathDefinition = paths[path];
    return Object.keys(pathDefinition).map((method) => {
      const pathParams = pathDefinition[method];
      // add comments to position easily
      const comments = `/**\n * @method ${method}\n * @path ${path}\n */\n`;
      return [
        comments,
        ...pathParams.ts.map((tsSchema: {
          name: string;
          type: string;
          value: string;
        }) => {
            if (tsSchema.type === 'interface') {
              return `export interface ${tsSchema.name} ${tsSchema.value}\n`;
            }
            return `export type ${tsSchema.name} = ${tsSchema.value};\n`;
          }),
      ];
    });
  });
  return [...definitionsTs, '\n', ...pathsTs.flat(2)].join('');
};

export type ToTsOptions = Pick<AriesConfig, "url" | "output" | "autoRequired" | "formatProp">;

export const toTs = (options: ToTsOptions) => generateOutputByPlugin(genTs, options);
