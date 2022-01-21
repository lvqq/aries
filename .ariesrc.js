// rc confg for test 
module.exports = {
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
  }
}