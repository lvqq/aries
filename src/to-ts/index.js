const SwaggerParserV2 = require('../core/parseV2');

module.exports = async ({
  swagger,
  options,
}) => {
  const { definitions } = new SwaggerParserV2(swagger, options);

  return Object.keys(definitions).map((name) => {
    const tsSchema = definitions[name].ts;
    if (tsSchema.type === 'interface') {
      return `export interface ${tsSchema.name} ${tsSchema.value}\n`;
    }
    return `export type ${tsSchema.name} = ${tsSchema.value};\n`;
  }).join('');
};
