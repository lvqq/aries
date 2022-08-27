// .ariesrc for test script
import { defineConfig } from './src/util'

defineConfig({
  url: './test/swagger.json',
  autoMock: true,
  autoRequired: true,
  formatMock: (data) => {
    return {
      code: 0,
      msg: 'success',
      data,
    }
  },
  formatProp: (prop) => {
    // Add prop format
    return prop
  },
})