import { describe, test, jest, expect, beforeAll, afterAll } from '@jest/globals';
import request from 'supertest';
import path from 'node:path';
import { mockServer, MockServerReturns } from '../src';

jest.useFakeTimers();
const cwd = process.cwd();
const url = path.resolve(cwd, './__tests__/input/swagger.json');

describe('server_test', () => {
  let testMockServer: MockServerReturns;

  beforeAll(async () => {
    testMockServer = await mockServer({
      url,
      autoMock: false,
      port: 3001,
    });
  });

  afterAll(async () => {
    testMockServer?.server?.close();
  });

  test('mock_server_get', async () => {
    expect.assertions(1);
    if (testMockServer) {
      const res = await request(testMockServer.server).get('/v2/pet/findByStatus');
      expect(res.statusCode).toBe(200);
    }
  });

  test('mock_server_post', async () => {
    expect.assertions(1);
    if (testMockServer) {
      await request(testMockServer.server).options('/v2/pet');
      const res = await request(testMockServer.server).post('/v2/pet');
      expect(res.statusCode).toBe(200);
    }
  });
});
