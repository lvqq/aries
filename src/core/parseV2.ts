import Chance from 'chance';
import mapValues from 'lodash.mapvalues';
import groupBy from 'lodash.groupby';
import fromPairs from 'lodash.frompairs';
import { AriesConfig, SwaggerV2 } from '../interface';
import { formatValidNamesByPath } from '../util';

const InvalidChar = /{|}|:|\./;

/**
 * Swagger parse class for swagger 2.0
 */
class SwaggerParserV2 {
  swagger: SwaggerV2.Swagger;

  options: Partial<AriesConfig>;

  chance: Chance.Chance;

  names: Record<string, string>;

  visited: Record<string, boolean>;

  visitedDefinitions: Record<string, SwaggerV2.Swagger['definitions']>;

  definitions: SwaggerV2.Swagger['definitions'];

  paths: SwaggerV2.Swagger['paths'];

  /**
   * init parse handle
   * @param {*} swagger swagger object
   * @param {*} options init options
   */
  constructor(swagger: SwaggerV2.Swagger, options: Partial<AriesConfig> = {}) {
    // init property
    this.swagger = swagger;
    this.options = options;
    this.chance = new Chance();
    // format definitions in to-ts
    this.names = {};
    // visited node, avoid ring
    this.visited = {};
    this.visitedDefinitions = {};
    // generate definitons, paths
    this.definitions = this.parseDefinitions();
    this.paths = this.parsePaths();
  }

  /**
   * parse schema, remove ref
   */
  parseSchema = (schema: SwaggerV2.Definition): SwaggerV2.Definition => {
    if (schema.allOf) {
      let properties = {};
      // merge allOf
      schema.allOf.forEach((subSchema: SwaggerV2.Definition) => {
        properties = {
          ...properties,
          ...this.parseSchema(subSchema).properties,
        };
      });
      return {
        ...schema,
        type: 'object',
        properties,
      };
    }
    if (schema.$ref) {
      const definition = this.generateNameByRef(schema.$ref);
      if (definition) {
        // node visited, aviod ring
        if (this.visited[definition]) {
          return {
            $ref: schema.$ref,
            ...(this.visitedDefinitions[definition] || this.swagger.definitions[definition]),
          };
        }
        this.visited[definition] = true;
        const value = this.parseSchema(this.swagger.definitions[definition]);
        this.visitedDefinitions[definition] = value;
        return {
          $ref: schema.$ref,
          ...value,
        };
      }
    }
    if (schema.type === 'array' && schema.items) {
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
  parseDefinitions = () =>
    mapValues(this.swagger.definitions, (schema, key) => {
      this.visited[key] = true;
      const value = this.parseSchema(schema);
      this.visitedDefinitions[key] = value;
      return {
        ...value,
        ts: {
          name: this.formatValidNamesByModal(key),
          type: schema.type === 'object' ? 'interface' : 'type',
          value: this.generateTypescriptTypeFromSchema(schema, { semi: false }),
        },
      };
    });

  /**
   * parse parameters, path/body/formData
   */
  parseParameters = (parameters: SwaggerV2.PathParameter[]) =>
    parameters.map((parameter) => {
      if (parameter.schema) {
        return {
          ...parameter,
          ...this.parseSchema(parameter.schema),
        };
      }
      return parameter;
    });

  /**
   * parse responses, 200/default
   */
  parseResponses = (responses: SwaggerV2.Path['responses']) => {
    if (responses.default || responses['200']) {
      const key = responses.default ? 'default' : '200';
      if (responses[key].schema) {
        return {
          ...responses,
          [key]: {
            ...responses[key],
            schema: this.parseSchema(responses[key].schema!),
          },
        };
      }
      return responses;
    }
    return responses;
  };

  /**
   * parse paths
   */
  parsePaths = (): SwaggerV2.Swagger['paths'] => {
    const { formatMock } = this.options;
    return mapValues(this.swagger.paths, (pathDefinition, path) =>
      mapValues(pathDefinition, (pathParams, method) => {
        // parse parameters
        const parameters = (
          Array.isArray(pathParams.parameters) ? this.parseParameters(pathParams.parameters) : []
        ) as SwaggerV2.PathParameter[];
        // params responses
        const responses: SwaggerV2.Path['responses'] = pathParams.responses
          ? this.parseResponses(pathParams.responses)
          : {};
        // exist default or 200
        let successResponseKey;
        if (responses['200']) successResponseKey = '200';
        if (responses.default) successResponseKey = 'default';
        const mockResponse =
          successResponseKey && responses[successResponseKey]?.schema
            ? this.generateMockFromSchema(responses[successResponseKey]!.schema!)
            : {};
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
                  params.map((param) => [
                    param.name,
                    this.generateMockFromSchema(param as SwaggerV2.Definition),
                  ])
                );
                // delete body key
                if (params[0] && params[0].in === 'body' && mockResult.body) {
                  return mockResult.body;
                }
                return mockResult;
              }
            ),
            // generate response mock data
            responses: formatMock ? formatMock(mockResponse) : mockResponse,
          },
          ts: [
            // group by 'in' path/body/formData
            ...Object.values(groupBy(parameters, (parameter) => parameter.in)).map((params) => {
              const required: string[] = [];
              type Property = ReturnType<typeof this.parseParameters>[number];
              const properties: Record<string, Property> = {};
              params.forEach((param) => {
                properties[param.name] = param;
                if (param.required) required.push(param.name);
              });
              const type = params[0].in;
              const { name } = params[0];
              let schema = {
                type: 'object',
                required,
                properties,
              } as SwaggerV2.Definition;
              // delete body key
              if (type === 'body' && name === 'body' && params[0].schema) {
                schema = params[0].schema;
              }
              return {
                name: this.formatValidNamesByPath({
                  path,
                  method,
                  type: `Request${type.slice(0, 1).toUpperCase()}${type.slice(1)}`,
                }),
                type: schema.type === 'object' && !schema.$ref ? 'interface' : 'type',
                value: this.generateTypescriptTypeFromSchema(schema, { semi: false }),
              };
            }),
            ...(successResponseKey && responses[successResponseKey]?.schema
              ? [
                  {
                    name: this.formatValidNamesByPath({ path, method, type: 'Response' }),
                    type:
                      responses[successResponseKey]?.schema?.type === 'object' &&
                      !responses[successResponseKey]?.schema?.$ref
                        ? 'interface'
                        : 'type',
                    value: this.generateTypescriptTypeFromSchema(
                      responses[successResponseKey]!.schema!,
                      { semi: false }
                    ),
                  },
                ]
              : []),
          ],
        };
      })
    );
  };

  generateNameByRef = (ref: string) => decodeURIComponent(ref).split('/').pop();

  formatValidNamesByModal = (name: string) => {
    const result = name
      .split('.')
      .map((str) => str.slice(0, 1).toUpperCase() + str.slice(1))
      .join('');
    this.names[name] = result;
    return result;
  };

  formatValidNamesByPath = ({
    path,
    method,
    type,
  }: {
    path: string;
    method: string;
    type: string;
  }) => {
    const formatPath = formatValidNamesByPath(path);
    const result = `${method.slice(0, 1).toUpperCase()}${method.slice(1)}${formatPath}${type
      .slice(0, 1)
      .toUpperCase()}${type.slice(1)}`;
    this.names[method + path + type] = result;
    return result;
  };

  formatSplitByLayer = ({ layer = 1, space = 2 }) =>
    `\n${new Array(layer).fill(' '.repeat(space)).reduce((a, b) => a + b, '')}`;

  /**
   * generate mock data from schema example, enum and random data
   */
  generateMockFromSchema = (schema: SwaggerV2.Definition): any => {
    /**
     * @autoMock use random mock data when there is no example or enum
     */
    const { autoMock = true } = this.options;
    // default null
    if (!schema || (!schema.example && !schema.type && !schema.enum && !schema.default)) {
      return null;
    }
    // use default
    if (schema.default) return schema.default;
    // use example
    if (schema.example) return schema.example;
    // use enum
    if (Array.isArray(schema.enum))
      return autoMock ? this.chance.pickone(schema.enum) : schema.enum[0];
    if (schema.type === 'array' && schema.items) {
      // random array length 1-3
      return autoMock
        ? new Array(this.chance.integer({ min: 1, max: 3 }))
            .fill(1)
            .map(() => this.generateMockFromSchema(schema.items!))
        : [this.generateMockFromSchema(schema.items!)];
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
  };

  /**
   * generate ts declaration from schema
   */
  generateRemarkFromSchema(schema: SwaggerV2.Definition, split: string) {
    const remarks = [];
    if (schema.description || schema.example) {
      remarks.push('/**');
      if (schema.description) {
        remarks.push(` * ${schema.description}`);
      }
      if (schema.example) {
        remarks.push(` * example: ${schema.example}`);
      }
      remarks.push(` */${split}`);
    }
    return remarks.join(split);
  }

  /**
   * generate ts declaration from schema
   */
  generateTypescriptTypeFromSchema(
    schema: SwaggerV2.Definition,
    options: { layer?: number; semi?: boolean; bracketSplit?: boolean } = {}
  ): string {
    const { autoRequired = true, formatProp } = this.options;
    /**
     * layer: recurve layer
     * semi: endline semi
     * bracketSplit: parentheses split
     */
    const { layer = 1, semi = true, bracketSplit = false } = options;

    const preSplit = this.formatSplitByLayer({ layer: layer - 1 });
    const split = this.formatSplitByLayer({ layer });
    const generateTypescriptType = (subSchema: SwaggerV2.Definition): string => {
      if (Array.isArray(subSchema.allOf)) {
        const allOfMap: Record<string, string> = {};
        // merge allOf
        subSchema.allOf.forEach((childSchema) => {
          let sourceSchema = childSchema;
          if (childSchema.$ref) {
            sourceSchema = this.parseSchema(childSchema);
          }
          Object.keys(sourceSchema.properties).forEach((key) => {
            const required = Array.isArray(sourceSchema.required)
              ? sourceSchema.required.includes(key)
              : autoRequired;
            const childAllOfSchema = sourceSchema.properties[key];
            let propKey = formatProp ? formatProp(key) : key;
            if (InvalidChar.test(propKey)) {
              propKey = `"${propKey}"`;
            }
            allOfMap[key] = `${this.generateRemarkFromSchema(childAllOfSchema, split)}${propKey}${
              required ? '' : '?'
            }: ${this.generateTypescriptTypeFromSchema(childAllOfSchema, {
              layer: layer + 1,
              bracketSplit: true,
            })}`;
          });
          return `{${split}${Object.values(allOfMap).join(split)}${
            bracketSplit ? preSplit : '\n'
          }}`;
        });
      }
      // use $ref
      if (subSchema.$ref) {
        const subName = this.generateNameByRef(subSchema.$ref);
        if (subName) {
          return this.formatValidNamesByModal(subName);
        }
      }
      if (subSchema.type === 'object') {
        const interfaceList = [];
        if (subSchema.properties) {
          interfaceList.push(
            ...Object.keys(subSchema.properties).map((key) => {
              const required = Array.isArray(subSchema.required)
                ? subSchema.required.includes(key)
                : autoRequired;
              const childSchema = subSchema.properties![key];
              let propKey = formatProp ? formatProp(key) : key;
              if (InvalidChar.test(propKey)) {
                propKey = `"${propKey}"`;
              }
              return `${this.generateRemarkFromSchema(childSchema, split)}${propKey}${
                required ? '' : '?'
              }: ${this.generateTypescriptTypeFromSchema(childSchema, {
                layer: layer + 1,
                bracketSplit: true,
              })}`;
            })
          );
        }
        if (subSchema.additionalProperties) {
          interfaceList.push(
            `[name: string]: ${this.generateTypescriptTypeFromSchema(
              subSchema.additionalProperties,
              { layer: layer + 1, bracketSplit: true }
            )}`
          );
        }
        return `{${split}${interfaceList.join(split)}${bracketSplit ? preSplit : '\n'}}`;
      }
      if (subSchema.type === 'array' && subSchema.items) {
        const hasEnum = Array.isArray(subSchema.items.enum) && subSchema.items.enum.length > 0;
        return `${
          hasEnum
            ? `(${generateTypescriptType(subSchema.items)})`
            : generateTypescriptType(subSchema.items)
        }[]`;
      }
      if (subSchema.type === 'integer' || subSchema.type === 'number') {
        return 'number';
      }
      if (subSchema.type === 'bool') {
        return 'boolean';
      }
      if (subSchema.type === 'file') {
        return 'File';
      }
      // use enum
      if (Array.isArray(subSchema.enum) && subSchema.enum.length > 0) {
        if (subSchema.type === 'string') {
          return subSchema.enum.map((item) => `"${item}"`).join(' | ');
        }
        return subSchema.enum.join(' | ');
      }
      return subSchema.type as string;
    };

    const output = generateTypescriptType(schema);

    return `${output}${semi ? ';' : ''}${schema.format ? `  // ${schema.format}` : ''}`;
  }
}

export default SwaggerParserV2;
