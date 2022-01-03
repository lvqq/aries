const mapValues = require('lodash.mapvalues');
const fromPairs = require('lodash.frompairs');
const groupBy = require('lodash.groupby');
const Chance = require('chance');

/**
 * Swagger parse class for swagger 2.0
 */
class SwaggerParserV2 {
  /**
   * init parse handle
   * @param {*} swagger swagger object
   * @param {*} options init options
   */
  constructor(swagger, options = {}) {
    this.swagger = swagger;
    this.options = options;
    this.chance = new Chance();

    this.definitions = this.parseDefinitions();
    this.paths = this.parsePaths();
  }

  /**
   * parse schema, remove ref
   */
  parseSchema = (schema) => {
    if (schema.$ref) {
      const definition = decodeURIComponent(schema.$ref).split('/').pop();
      return this.parseSchema(this.swagger.definitions[definition]);
    }
    if (schema.type === 'array') {
      return {
        ...schema,
        items: this.parseSchema(schema.items),
      };
    }
    if (schema.type === 'object') {
      return {
        ...schema,
        properties: mapValues(schema.properties, this.parseSchema),
      };
    }
    return schema;
  };

  /**
   * parse all definitions
   */
  parseDefinitions() {
    return mapValues(this.swagger.definitions, (schema) => this.parseSchema(schema));
  }

  /**
   * parse parameters, path/body/formData
   */
  parseParameters(parameters) {
    return parameters.map((parameter) => {
      if (parameter.schema) {
        return {
          ...parameter,
          ...this.parseSchema(parameter.schema),
        };
      }
      return parameter;
    });
  }

  /**
   * parse responses, 200/default
   */
  parseResponses(responses) {
    if (responses.default || responses['200']) {
      const key = responses.default ? 'default' : '200';
      if (responses[key].schema) {
        return {
          ...responses,
          [key]: {
            ...responses[key],
            schema: this.parseSchema(responses[key].schema),
          },
        };
      }
      return responses;
    }
    return responses;
  }

  /**
   * parse paths
   */
  parsePaths() {
    const { resTemplate = '{"code":0,"msg":"success","data":$data}' } = this.options;
    // validate resTpl
    try {
      JSON.parse(resTemplate.replace('$data', '""'));
    } catch (e) {
      throw new Error('parse error! Invalid -response-template');
    }
    return mapValues(
      this.swagger.paths,
      (pathDefinition) => mapValues(pathDefinition, (pathParams) => {
        // parse parameters
        const parameters = this.parseParameters(pathParams.parameters);
        // params responses
        const responses = this.parseResponses(pathParams.responses);
        // exist default or 200
        let successResponseKey;
        if (responses['200']) successResponseKey = '200';
        if (responses.default) successResponseKey = 'default';
        return {
          ...pathParams,
          parameters,
          responses,
          mock: {
            // generate parameters mock data
            parameters: mapValues(
              // group by 'in' path/body/formData
              groupBy(parameters, (parameter) => parameter.in),
              (params) => {
                const mockResult = fromPairs(
                  params.map((param) => [param.name, this.generateMockFromSchema(param)]),
                );
                // delete body key
                if (params[0] && params[0].in === 'body' && mockResult.body) {
                  return mockResult.body;
                }
                return mockResult;
              },
            ),
            // generate response mock data
            responses: JSON.parse(resTemplate.replace('$data', JSON.stringify(
              successResponseKey && responses[successResponseKey].schema
                ? this.generateMockFromSchema(responses[successResponseKey].schema) : {},
            ))),
          },
        };
      }),
    );
  }

  /**
   * generate mock data from schema example, enum and random data
   */
  generateMockFromSchema(schema) {
    /**
     * @autoMock use random mock data when there is no example or enum
     */
    const { autoMock = true } = this.options;
    // default null
    if (!schema
      || (!schema.example && !schema.type && !schema.enum && !schema.default)) { return null; }
    // use default
    if (schema.default) return schema.default;
    // use example
    if (schema.example) return schema.example;
    // use enum
    if (Array.isArray(schema.enum)) return this.chance.pickone(schema.enum);
    if (schema.type === 'array') {
      // random array length 1-3
      return new Array(this.chance.integer({ min: 1, max: 3 })).fill(1)
        .map(() => this.generateMockFromSchema(schema.items));
    }
    if (schema.type === 'object') {
      return mapValues(schema.properties, (property) => this.generateMockFromSchema(property));
    }
    // use random data
    if (schema.type === 'string') return autoMock ? this.chance.string() : '';
    if (schema.type === 'integer') return autoMock ? this.chance.integer() : 0;
    if (schema.type === 'number') return autoMock ? this.chance.integer() : 0;
    if (schema.type === 'boolean') return autoMock ? this.chance.bool() : true;
    return null;
  }
}

module.exports = SwaggerParserV2;
