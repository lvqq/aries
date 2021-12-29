module.exports = ({
  description, requestUrl, requestMethod, request, requsetSample, response, responseSample,
}) => `
## ${requestUrl}
### 1.Interface description
${description}

### 2.Request url
${requestUrl}

### 3.Request method
${requestMethod}

### 4.Request
${request}

#### Request samples
${requsetSample}

### 5.Response
${response}

#### Response samples
${responseSample}
`;
