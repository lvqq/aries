const groupBy = require('lodash.groupby');
const fromPairs = require('lodash.frompairs');
const SwaggerParserV2 = require('../core/parseV2');

module.exports = ({
  swagger,
  options,
}) => {
  const { paths } = new SwaggerParserV2(swagger, options);
  const mdJson = swagger.tags && swagger.tags.length
    ? fromPairs(swagger.tags.map((tag) => [tag.name, tag])) : {};
  // handle tags
  Object.keys(paths).forEach((path) => {
    Object.keys(paths[path]).forEach((method) => {
      const schema = paths[path][method];
      const tagName = schema.tags && schema.tags[0] ? schema.tags[0] : '';
      if (!mdJson[tagName]) {
        mdJson[tagName] = {
          name: tagName,
        };
      }
      if (!mdJson[tagName].paths) {
        mdJson[tagName].paths = [];
      }
      mdJson[tagName].paths.push({
        ...schema,
        path,
        method,
      });
    });
  });

  const requestTableHeader = 'Param | Required | Type | Remark\n---- | -------- | -------- | ----';

  const generateParamsTableItem = (schema) => {
    let required = 'N/A';
    if (schema.required === true) required = 'Y';
    if (schema.required === false) required = 'N';
    return `${schema.name} | ${required} | ${schema.type} | ${schema.description || 'N/A'}`;
  };

  // generate param table markdown
  const generateParamsTable = (schema, configs) => {
    const { subParams = [], subTitle = true } = configs;
    const subResults = [];
    if (schema.type === 'object' && schema.properties) {
      subParams.push(`##### ${schema.name}\n${requestTableHeader}`);
      subParams.push(Object.keys(schema.properties).map((name) => {
        const subSchema = {
          name,
          ...schema.properties[name],
        };
        // handle required
        if (Array.isArray(schema.required)) {
          subSchema.required = schema.required.includes(name);
        }
        return generateParamsTable(subSchema, {
          subParams: subResults,
        });
      }).concat(subResults).join('\n'));
    }
    if (schema.type === 'array') {
      if (['object', 'array'].includes(schema.items.type)) {
        subParams.push(generateParamsTable({
          name: schema.name,
          ...schema.items,
        }, {
          subParams: subResults,
          subTitle: false,
        }));
        subParams.push(...subResults);
      }
      return generateParamsTableItem({
        ...schema,
        type: `${schema.items.type}[]`,
      });
    }
    return subTitle ? generateParamsTableItem(schema) : '';
  };

  const generateParametersToMd = (parameters) => {
    const paramsMap = groupBy(parameters, (parameter) => parameter.in);
    return Object.keys(paramsMap).map((paramType) => {
      const subParams = [];
      return `#### ${paramType}\n${[
        requestTableHeader,
        ...paramsMap[paramType].map(
          (param) => generateParamsTable(param, { subParams }),
        ),
        ...subParams,
      ].join('\n')}`;
    }).join('\n');
  };

  const generatePathsToMd = (requests, topIndex) => requests
    .map((request, index) => `## ${topIndex}.${index + 1} ${request.method.toLocaleUpperCase()} ${request.path}\n${
      request.description ? `${request.description}\n` : ''
    }### Parameters\n${
      generateParametersToMd(request.parameters) || 'N/A'
    }\n### Request samples\n${
      JSON.stringify(request.mock.parameters) === '{}' ? 'N/A'
        : Object.keys(request.mock.parameters)
          .map(
            (type) => `#### ${type}\n\`\`\`\n${JSON.stringify(request.mock.parameters[type], null, 2)}\n\`\`\``,
          ).join('\n')
    }\n### Response samples\n${
      JSON.stringify(request.mock.responses) === '{}' ? 'N/A'
        : `\`\`\`\n${JSON.stringify(request.mock.responses, null, 2)}\n\`\`\``
    }`).join('\n');

  const markdown = Object.values(mdJson)
    .map((item, index) => `# ${index + 1}.${item.name}\n${
      item.description ? `${item.description}\n` : ''
    }${generatePathsToMd(item.paths, index + 1)}`);

  return markdown.join('\n\n');
};
