import { describe, test, jest, expect, beforeAll, afterAll } from '@jest/globals';
import request from 'supertest';
import path from 'node:path';
import { mockServer, MockServerReturns } from '../src';

jest.useFakeTimers();
const cwd = process.cwd();
const jsonUrl = path.resolve(cwd, './__tests__/input/swagger.json');
const yamlUrl = path.resolve(cwd, './__tests__/input/swagger.yml');

describe('server_mock_test', () => {
  let jsonMockServer: MockServerReturns;
  let yamlMockServer: MockServerReturns;

  beforeAll(async () => {
    jsonMockServer = await mockServer({
      url: jsonUrl,
      autoMock: false,
      port: 3001,
    });

    yamlMockServer = await mockServer({
      url: yamlUrl,
      autoMock: false,
      port: 3002,
    });
  });

  afterAll(async () => {
    jsonMockServer?.server?.close();
    yamlMockServer?.server?.close();
  });

  test('source_json', async () => {
    expect.assertions(1);
    if (jsonMockServer) {
      const res = await request(jsonMockServer.server).get('/v2/pet/findByStatus');
      expect(res.statusCode).toBe(200);
    }
  });

  test('source_yaml', async () => {
    expect.assertions(1);
    if (yamlMockServer) {
      const res = await request(yamlMockServer.server).get('/v2/pet/findByStatus');
      expect(res.statusCode).toBe(200);
    }
  });
});
