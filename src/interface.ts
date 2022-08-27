export interface AriesConfig {
  url: string;
  output?: string;
  autoMock?: boolean;
  formatMock?: (data: any) => any;
  autoRequired?: boolean;
  formatProp?: (prop: string) => string;
  port?: number;
}

export namespace SwaggerV2 {
  export interface Definition {
    type?: string;
    required?: string[];
    $ref?: string;
    example?: string;
    description?: string;
    enum?: string[];
    format?: string;
    properties?: Record<string, Definition>;
    items?: Record<string, Definition>;
    [key: string]: any;
  }
  export interface PathParameter {
    name: string;
    in: string;
    type?: string;
    description?: string;
    required?: boolean;
    format?: string;
    schema?: Definition;
    [key: string]: any;
  }
  export interface PathResponse {
    description?: string;
    schema?: Definition;
    headers?: Record<string, Definition>;
    [key: string]: any;
  }
  export interface Path {
    tags?: string[];
    description?: string;
    parameters: PathParameter[];
    responses: Record<string, PathResponse>;
    [key: string]: any;
  }
  export interface Swagger {
    swagger: '2.0';
    basePath: string;
    tags: {
      name: string;
      description?: string;
      [key: string]: any;
    }[];
    paths: Record<string, Record<string, Path>>;
    definitions: Record<string, Definition>;
    [key: string]: any;
  }
}

export namespace Plugin {
  export interface Params {
    swagger: SwaggerV2.Swagger;
    options: Partial<AriesConfig>;
  }
  export type Return =
    | string
    | {
        content: string;
        filename: string;
      }[];
  export type Function = (pluginParam: Params) => Promise<Return> | Return;
}
