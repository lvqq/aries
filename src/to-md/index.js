const { getSchemaByRef, getRequestData, getResponseData } = require('../utils');
const mdTemplate = require('./template');

const getDescription = (config) => config.summary || '';

const getRequestMethod = (method) => method.toLocaleUpperCase();

const getRequestTableItem = (params) => `${params.name} | ${params.in || 'body'} | ${params.required ? 'Y' : 'N'} | ${params.type} | ${params.description || ''}\n`;

const getResponseTableItem = (params) => `${params.name} | ${params.type} | ${params.example === undefined ? '' : params.example} | ${params.description || ''}\n`;

const getTableList = (swagger, {
  tableHead = '',
  getTableItem,
} = {}) => {
  const tableList = [tableHead];
  const {
    type, properties, items, required,
  } = swagger;
  let obj = {};
  if (type === 'object' && properties) {
    obj = properties;
  } else if (type === 'array' && items.type === 'object') {
    obj = items.properties;
  }
  if (JSON.stringify(obj) === '{}') return [];
  Object.keys(obj).forEach((key) => {
    let tableItem = getTableItem({
      ...obj[key],
      name: key,
      required: required && required.includes(key),
    });
    if (obj[key].type === 'object' || (obj[key].type === 'array' && obj[key].items.type === 'object')) {
      tableList.push({
        [key]: getTableList(obj[key], { tableHead, getTableItem }),
      });
    }
    if (obj[key].type === 'array') {
      tableItem = getTableItem({
        ...obj[key],
        name: key,
        required: required && required.includes(key),
        type: `${obj[key].items.type}[]`,
        example: obj[key].items.example,
      });
    }
    tableList.push(tableItem);
  });
  return tableList;
};

const getTableArr = (arr) => {
  const dataList = [];
  const table = arr.map((tableItem) => {
    if (Object.prototype.toString.call(tableItem) === '[object Object]') {
      dataList.push(tableItem);
      return '';
    }
    return tableItem;
  }).join('');
  const itemTable = dataList[0] ? dataList.map((dataItem) => `
**${Object.keys(dataItem)[0]}**
${getTableArr(Object.values(dataItem)[0])}
      `).join('') : '';
  return `${table}${itemTable}`;
};

const getRequest = (config, definitions) => {
  const { parameters } = config;
  const requestTableHead = 'Param | Location | Required | Type | Remark\n---- | -------- | -------- | -------- | ----\n';
  const queryTableList = [requestTableHead];
  let bodyTableList = [];

  parameters.forEach((params) => {
    if (params.in === 'query') {
      queryTableList.push(getRequestTableItem(params));
    } else if (params.in === 'body') {
      const schema = getSchemaByRef(params.schema, definitions);
      bodyTableList = getTableList(schema, {
        tableHead: requestTableHead,
        getTableItem: getRequestTableItem,
      });
    } else if (params.in === 'path') {
      queryTableList.push(getRequestTableItem(params));
    } else if (params.in === 'formData') {
      queryTableList.push(getRequestTableItem(params));
    }
  });
  if (queryTableList.length === 1) {
    if (bodyTableList[0]) {
      return getTableArr(bodyTableList);
    }
    return 'N/A';
  }
  return queryTableList.join('');
};

const getRequsetSample = (config, definitions) => {
  const data = getRequestData(config, definitions);
  if (JSON.stringify(data) === '{}') {
    return 'N/A';
  }
  return `\`\`\`\n${JSON.stringify(data, null, 2)}\n\`\`\``;
};

const getResponse = (config, definitions) => {
  const responseTableHead = 'Name | Type | Value | Remak\n---- | -------- | -------- | ----\n';
  const { responses } = config;
  const responseStruct = {
    ...responses.default,
    ...responses['200'],
  };
  if (!responseStruct.schema) return '';
  let tableList = [];
  const schema = getSchemaByRef(responseStruct.schema, definitions);
  const { type } = schema;
  if (type === 'array' || type === 'object') {
    tableList = getTableList(schema, { tableHead: responseTableHead, getTableItem: getResponseTableItem });
  } else {
    tableList.push(responseTableHead);
    tableList.push(getResponseTableItem({
      ...schema,
      name: '-',
    }));
  }
  return tableList[0] ? getTableArr(tableList) : 'N/A';
};

const getResponseSample = (config, definitions) => {
  const data = getResponseData(config, definitions);
  return `\`\`\`\n${JSON.stringify(data, null, 2)}\n\`\`\``;
};

module.exports = ({
  swagger,
}) => {
  const { paths, definitions } = swagger;
  const retVal = [];
  Object.keys(paths).forEach((apiPath) => {
    Object.keys(paths[apiPath]).forEach((apiMethod) => {
      const apiDefineObj = paths[apiPath][apiMethod];

      const description = getDescription(apiDefineObj);
      const requestMethod = getRequestMethod(apiMethod);
      const request = getRequest(apiDefineObj, definitions);
      const requsetSample = getRequsetSample(apiDefineObj, definitions);
      const response = getResponse(apiDefineObj, definitions);
      const responseSample = getResponseSample(apiDefineObj, definitions);

      retVal.push(mdTemplate({
        description,
        requestUrl: apiPath,
        requestMethod,
        request,
        requsetSample,
        response,
        responseSample,
      }));
    });
  });
  return retVal.join('');
};
