const express = require('express');
const SwaggerParserV2 = require('../core/parseV2');
const { generateOptionsAndSwagger } = require('../core');

module.exports = async (originOptions) => {
  let params;
  try {
    params = await generateOptionsAndSwagger(originOptions);
    if (params) {
      // parse swagger
      const { swagger, options } = params;
      const { paths } = new SwaggerParserV2(swagger, options);
      // listen mock server
      const app = express();
      const { port = 3000 } = options;
      const { basePath } = swagger;

      Object.keys(paths).forEach((path) => {
        Object.keys(paths[path]).forEach((method) => {
          const mockMethod = method.toLocaleLowerCase();
          const mockRes = paths[path][method].mock.responses;
          // add base path
          let mockPath = `${basePath && basePath !== '/' ? swagger.basePath : ''}${path}`;
          // dynamic parameter
          const matchs = path.match(/{[^{}]*}/g);
          if (matchs) {
            matchs.forEach((match) => {
              mockPath = mockPath.replaceAll(match, `:${match.slice(1, -1)}`);
            });
          }
          app[mockMethod](mockPath, (req, res) => {
            res.set('Access-Control-Allow-Origin', '*');
            res.send(mockRes);
          });
        });
      });

      app.listen(port, () => {
        console.log(`Mock server listening at http://localhost:${port}`);
      });
    }
  } catch (e) {
    console.log(e);
  }
};
