const { getSchemaByRef, createMD5Hash } = require('../utils')
const omit = require('lodash.omit')

const getSchemaItem = (params) => {
  const { type, description, required, errorMessage } = params
  let retVal = {
    type,
    ...description ? { description } : {},
    ...(required && !Array.isArray(required)) ? { required } : {},
    ...errorMessage ? { message: errorMessage } : {},
  }
  if(type === 'string') {
    const { minLength, maxLength, pattern, 'x-format': format = {} } = params 
    retVal = {
      ...retVal,
      ...minLength ? { minLength } : {},
      ...maxLength ? { maxLength } : {},
      ...pattern ? { pattern: `/${pattern}/` } : {},
      ...format.email ? { format: { type: 'email'} } : {},
    }
  }else if (type === 'boolean') {
    const { enum: assert = [] } = params
    if(assert.includes(true)) {
      retVal.assertTrue = true
    }
    if(assert.includes(false)) {
      retVal.assertFalse = false
    }
  }else if (type === 'number') {
    const { minimum, maximum, 'x-constraint': constraint = {} } = params
    const { greater, less, precision } = constraint
    retVal = {
      ...retVal,
      ...minimum ? { 
        minimum,
        exclusiveMin: false,  
      } : {},
      ...maximum ? {
        maximum,
        exclusiveMax: false,
      } : {},
      ...precision ? {
        format: {
          type: 'decimal',
          precision,
        }
      } : {}
    }
    //exist greater but not exist minimum, or, both exist and greater >= minimum
    if(greater && (!minimum || (minimum && (greater >= minimum)))) {
      retVal = {
        ...retVal,
        minimum: greater,
        exclusiveMin: true,
      }
    }
    // exist less but not exist maximum, or, both exist and less <= maximum
    if(less && (!maximum || (maximum && (less <= maximum)))) {
      retVal = {
        ...retVal,
        maximum: less,
        exclusiveMin: true,
      }
    }
  }else if (type === 'object') {
    const { properties = {}, required = [] } = params
    retVal.properties = {}
    Object.keys(properties).forEach(key => {
      retVal.properties[key] = {
        ...getSchemaItem(properties[key]),
        required: required.includes(key)
      }
    })
  }else if(type === 'array') {
    const { minItems, maxItems, items } = params
    retVal = {
      ...retVal,
      ...minItems ? { minItems } : {},
      ...maxItems ? { maxItems } : {},
      ...items ? { items: getSchemaItem(items) } : {},
    }
  }
  return retVal
}

const getSchemaObj = (params, definitions) => {
  const { parameters = [] } = params
  let schema = { type: 'object', properties: {} }
  parameters.forEach(item => {
    if(item.in === 'query') {
      const schemaItem = getSchemaItem(item)
      // add required property
      if(schemaItem.required) {
        schema.required = true
      }
      schema.properties = {
        ...schema.properties,
        [item.name]: schemaItem,
      }
    }else if(item.in === 'body') {
      const schemaBody  = getSchemaByRef(item.schema, definitions)
      const { required = [] } = schemaBody
      schema = getSchemaItem(schemaBody)
      // add required property
      if(required[0]) {
        schema.required = true
      }
    }
  })
  // if properties not exist, return {}
  // return JSON.stringify(schema.properties) === '{}' ? {} : schema
  return schema
}

module.exports = async ({
  swagger,
}) => {
  const { paths, definitions } = swagger
  const schemas = []
  Object.keys(paths).forEach(apiPath => {
    Object.keys(paths[apiPath]).forEach(apiMethod => {
      const apiDefineObj = paths[apiPath][apiMethod]
      const schemaBody = getSchemaObj(apiDefineObj, definitions)
      const schema =  JSON.stringify({
        path: apiPath,
        method: apiMethod,
        ...schemaBody,
      }, null, 2)
      schemas.push({
        path: apiPath,
        method: apiMethod,
        schema,
        hash: createMD5Hash(schema),
      })
    })
  })

  const files = schemas.map(item => {
    // TODO: add hash config to determine use hash name or request path name
    // const fileName = item.path.substring(1, item.path.length).replace(/\//g, '-')
    // generate hash from file content
    return {
      filename: `${item.hash}.json`,
      content: item.schema,
    }
  })
  
  // generate manifest
  const manifestObj = {
    manifest: schemas.map(item => {
      // delete schema in manifest
      return omit(item, ['schema'])
    })
  }
  return [
    ...files,
    {
      filename: 'manifest.json',
      content: JSON.stringify(manifestObj, null, 2)
    }
  ]
}