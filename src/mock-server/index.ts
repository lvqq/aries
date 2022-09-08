import express, { Express } from 'express';
import cors from 'cors';
import type { Server } from 'node:http';
import minimatch from 'minimatch';
import { generateOptionsAndSwagger } from '../core';
import SwaggerParserV2 from '../core/parseV2';
import { AriesConfig } from '../interface';

export type MockServerOptions = Pick<AriesConfig, 'url' | 'port' | 'autoMock' | 'formatMock'>;
export type MockServerReturns = Partial<{
  server: Server;
  app: Express;
}>;

export const mockServer = async (
  originOptions: MockServerOptions,
  useRcConfig = false
): Promise<MockServerReturns> => {
  const params = await generateOptionsAndSwagger({ ...originOptions, useRcConfig });
  // parse swagger
  const { swagger, options } = params;
  const { paths } = new SwaggerParserV2(swagger, options);
  const { pattern } = options;
  // listen mock server
  const app = express();
  app.use(cors());
  const { port = 3000 } = options;
  const { basePath } = swagger;

  Object.keys(paths).forEach((path) => {
    if (pattern?.some((item) => minimatch(path, item))) {
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
    }
  });

  const server = app.listen(port, () => {
    console.log(`Mock server listening at http://localhost:${port}`);
  });

  // return for unit test
  return { app, server };
};
