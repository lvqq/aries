const SwaggerParserV2 = require('../core/parseV2');

module.exports = ({
  swagger,
  options,
}) => {
  const { paths } = new SwaggerParserV2(swagger, options);
  const mockJson = {};
  Object.keys(paths).forEach((path) => {
    Object.keys(paths[path]).forEach((method) => {
      mockJson[`${method.toLocaleUpperCase()} ${path}`] = paths[path][method].mock.responses;
    });
  });
  return JSON.stringify(mockJson, null, 2);
};
