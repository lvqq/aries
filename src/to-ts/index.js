const SwaggerParserV2 = require('../core/parseV2');

module.exports = async ({
  swagger,
  options,
}) => {
  const { definitions } = new SwaggerParserV2(swagger, options);

  return Object.keys(definitions).map((name) => {
    const schema = definitions[name];
    if (schema.type === 'object') {
      return `export interface ${name} ${schema.ts}\n`;
    }
    return `export type ${name} = ${schema.ts};\n`;
  }).join('');
};
