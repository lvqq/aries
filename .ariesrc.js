// rc confg for test 
module.exports = {
  url: './test/swagger.json',
  autoMock: true,
  resTemplate: '{"code":0,"msg":"success","data":$data}',
  defaultRequired: true,
  formatProp: (prop) => {
    // Add prop format
    return prop
  }
}