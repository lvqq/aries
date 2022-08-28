import { AriesConfig, Plugin } from '../interface';
import { generateOutputByPlugin } from '../core';
import SwaggerParserV2 from '../core/parseV2';
import { genTs } from '../to-ts';
import { formatValidNamesByPath } from '../util';

interface TsSchema {
  name: string;
  type: string;
  value: string;
}

export const genRequest: Plugin.Function = async ({ swagger, options }) => {
  const { paths } = new SwaggerParserV2(swagger, options);
  const { basePath } = swagger;
  const requestFileName = options.output?.split('/')?.slice(-1)?.pop() || 'request.ts';
  const tsDeclareFileName = requestFileName.split('.').slice(0, -1).concat(['types']).join('.');
  const tsDeclare = (await genTs({ swagger, options })) as string;

  const importRequest = `import axios from 'axios';\n\n`;
  const importTypes: string[] = [];

  const pathsTs = Object.keys(paths).map((path) => {
    const pathDefinition = paths[path];
    return Object.keys(pathDefinition).map((method) => {
      const formatName = formatValidNamesByPath(path);
      const { description, summary } = pathDefinition[method];
      const paramsDeclare: TsSchema[] = pathDefinition[method].ts;
      let pathDeclare = '';
      let queryDeclare = '';
      let bodyDeclare = '';
      paramsDeclare.forEach((param) => {
        if (param.name.endsWith('RequestPath')) {
          pathDeclare = `  path: ${param.name};`;
          importTypes.push(param.name);
        } else if (param.name.endsWith('RequestQuery')) {
          queryDeclare = `  params: ${param.name};`;
          importTypes.push(param.name);
        } else if (param.name.endsWith('RequestBody')) {
          bodyDeclare = `  data: ${param.name};`;
          importTypes.push(param.name);
        }
      });
      const allParams = [pathDeclare, queryDeclare, bodyDeclare].filter(Boolean);
      // match path param and replace
      const formatPath = pathDeclare
        ? `\`${basePath}${path.replace(/\{(.*)\}/g, (_$0, $1) => `\${args.path.${$1}}`)}\``
        : `'${basePath}${path}'`;
      // add comments of summary and description
      const comments =
        description || summary
          ? `/**\n${summary ? ` * @summary ${summary}\n` : ''}${
              description ? ` * @description ${description}\n` : ''
            } */\n`
          : '';
      return `${comments}export const ${method}${formatName} = (${
        allParams.length > 0 ? `args: {\n${allParams.join('\n')}\n}` : ''
      }) => axios.${method}(${formatPath}, {${
        queryDeclare || bodyDeclare
          ? `\n  ${queryDeclare ? `params: args.params` : ''}${
              bodyDeclare ? `data: args.data` : ''
            }\n`
          : ''
      }});\n\n`;
    });
  });

  return [
    {
      filename: `${tsDeclareFileName}.ts`,
      content: tsDeclare,
    },
    {
      filename: requestFileName,
      content: [
        importRequest,
        ...(importTypes.length
          ? [
              'import {\n',
              ...importTypes.map((types) => `  ${types},\n`),
              `} from './${tsDeclareFileName}';\n\n`,
            ]
          : []),
        ...pathsTs.flat(2),
      ].join(''),
    },
  ];
};

export type ToRequestOptions = Pick<AriesConfig, 'url' | 'output' | 'autoRequired' | 'formatProp'>;

export const toRequest = (options: ToRequestOptions) => generateOutputByPlugin(genRequest, options);
