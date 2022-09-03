// .ariesrc for test script
import { defineConfig } from './src'

export default defineConfig({
  url: './test/swagger.json',
  autoMock: false,
  autoRequired: true,
  formatMock: (data) => {
    return {
      code: 0,
      msg: 'success',
      data,
    }
  },
})