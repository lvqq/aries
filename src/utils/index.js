const cloneDeep = require('lodash.clonedeep');
const crypto = require('crypto');

/**
 * parse schema by ref
 * @param schema
 * @param definitions definitions linked by refs
 */
const getSchemaByRef = (schema, definitions) => {
  const { $ref: ref } = schema;
  if (!ref) return schema;
  const key = decodeURIComponent(ref).split('/').pop();
  const swagger = cloneDeep(definitions[key]);
  const { type, items, properties } = swagger;
  if (type === 'array') {
    swagger.items = getSchemaByRef(items, definitions);
  } else if (type === 'object') {
    Object.keys(properties).forEach((propKey) => {
      properties[propKey] = getSchemaByRef(properties[propKey], definitions);
    });
    swagger.properties = properties;
  }
  return swagger;
};

/**
 * handle example undefined
 * @param item
 */
const handleUndefined = (item) => {
  if (!item || (!item.example && !item.type)) return '';
  if (item.example) return item.example;
  if (item.type === 'string') return '';
  if (item.type === 'integer') return 0;
  if (item.type === 'boolean') return true;
  return '';
};

/**
 * get data from swagger example
 * @param swagger
 */
const getDataFromExample = (swagger) => {
  let data = '';
  if (swagger.type === 'array') {
    if (swagger.items.type === 'object' || swagger.items.type === 'array') {
      data = [getDataFromExample(swagger.items)];
    } else {
      data = [handleUndefined(swagger.items)];
    }
  } else if (swagger.type === 'object') {
    if (!swagger.properties) return {};
    data = {};
    Object.keys(swagger.properties).forEach((key) => {
      const value = swagger.properties[key];
      if (value.type === 'object' || value.type === 'array') {
        data[key] = getDataFromExample(value);
      } else {
        data[key] = handleUndefined(value);
      }
    });
  } else {
    data = handleUndefined(swagger);
  }
  return data;
};

/**
 * get request data from swagger json
 * @param config swagger object including parameters
 * @param definitions definitions linked by refs
 */
const getRequestData = (config, definitions) => {
  const { parameters } = config;
  const data = {};
  parameters.forEach((params) => {
    if (params.in === 'query' || params.in === 'path' || params.in === 'formData') {
      data[params.name] = handleUndefined(params);
    } else if (params.in === 'body') {
      const schema = getSchemaByRef(params.schema, definitions);
      const { properties } = schema;
      if (!properties) return;
      Object.keys(properties).forEach((key) => {
        data[key] = getDataFromExample(properties[key]);
      });
    }
  });
  return data;
};

/**
 * get response data from swagger json
 * @param config swagger object including responses
 * @param definitions definitions linked by refs
 */
const getResponseData = (config, definitions) => {
  const { responses } = config;
  const responseStruct = {
    ...responses.default,
    ...responses['200'],
  };
  if (!responseStruct.schema) return '';
  const schema = getSchemaByRef(responseStruct.schema, definitions);

  return {
    code: 0,
    msg: 'success',
    data: getDataFromExample(schema),
  };
};

const createMD5Hash = (content) => {
  const hash = crypto.createHash('md5');
  hash.update(content);
  return hash.digest('hex');
};

module.exports = {
  getSchemaByRef,
  getRequestData,
  getResponseData,
  createMD5Hash,
};
