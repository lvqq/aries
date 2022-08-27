import express from 'express';
import cors from 'cors';
import { generateOptionsAndSwagger } from '../core';
import SwaggerParserV2 from '../core/parseV2'
import { AriesConfig } from '../interface';

export type MockServerOptions = Pick<AriesConfig, "url" | "port" | "autoMock" | "formatMock">;

export const mockServer = async (originOptions: MockServerOptions) => {
  let params;
  try {
    params = await generateOptionsAndSwagger(originOptions);
    if (params) {
      // parse swagger
      const { swagger, options } = params;
      const { paths } = new SwaggerParserV2(swagger, options);
      // listen mock server
      const app = express();
      app.use(cors());
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
              mockPath = mockPath.replace(match, `:${match.slice(1, -1)}`);
            });
          }
          app[mockMethod as 'get' | 'post'](mockPath, (req, res) => {
            if (req.method === 'OPTIONS') {
              res.status(200).end();
              return;
            }
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