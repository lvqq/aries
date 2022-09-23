// .ariesrc for test script
import { defineConfig } from './src';

export default defineConfig({
  url: './__tests__/input/swagger.json',
  autoMock: false,
  autoRequired: true,
  pattern: ['/**/*'],
  formatMock: (data, path, method) => {
    if (path === '/pet' && method === 'post') return data;
    return {
      code: 0,
      msg: 'success',
      data,
    };
  },
});
