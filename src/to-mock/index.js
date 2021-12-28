const { getResponseData } =require('../utils')

module.exports = ({
  swagger,
}) => {
  const { paths, definitions } = swagger;
  const mockJson = {}
  Object.keys(paths).forEach(apiPath => {
    Object.keys(paths[apiPath]).forEach(apiMethod => {
      const apiDefineObj = paths[apiPath][apiMethod]
      const result = getResponseData(apiDefineObj, definitions)
      if (result) {
        mockJson[`${apiMethod.toLocaleUpperCase()} ${apiPath}`] = result;
      }
    })
  })
  return JSON.stringify(mockJson, null, 2)
}