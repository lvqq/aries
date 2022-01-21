export interface SwaggerV2Definition {
  type?: string;
  required?: string[];
  $ref?: string;
  example?: string;
  description?: string;
  enum?: string[];
  format?: string;
  properties?: Record<string, SwaggerV2Definition>;
  items?: Record<string, SwaggerV2Definition>;
  [key: string]: any;
}

export interface SwaggerV2PathParameter {
  name: string;
  in: string;
  description: string;
  type?: string;
  required: boolean;
  format?: string;
  schema?: SwaggerV2Definition;
  [key: string]: any;
}

export interface SwaggerV2PathResponse {
  description?: string;
  schema?: SwaggerV2Definition;
  headers?: Record<string, SwaggerV2Definition>;
  [key: string]: any;
}

export interface SwaggerV2Path {
  tags: string[];
  description: string;
  parameters: SwaggerV2PathParameter[];
  responses: Record<string, SwaggerV2PathResponse>
  [key: string]: any;
}

export interface SwaggerV2 {
  swagger: "2.0";
  basePath: string;
  tags: {
    name: string;
    description?: string;
    [key: string]: any;
  }[];
  paths: Record<string, Record<string, SwaggerV2Path>>;
  definitions: Record<string, SwaggerV2Definition>;
  [key: string]: any;
}

export interface RequiredOptions {
  url: string;
}

export interface ToTsOptions extends RequiredOptions {
  output: string;
  autoRequired?: boolean;
  formatProp?: (prop: string) => string
}

export interface ToMdOptions extends RequiredOptions {
  output: string;
  autoMock?: boolean;
  formatMock?:  (mock: any) => any
}

export interface ToMockOptions extends RequiredOptions {
  output: string;
  autoMock?: boolean;
  formatMock?:  (mock: any) => any
}

export interface MockServerOptions extends RequiredOptions {
  autoMock?: boolean;
  port?: number
  formatMock?:  (mock: any) => any
}

export interface PluginParams<T> {
  options: T;
  swagger: SwaggerV2
}

export declare function toTs(params: PluginParams<ToTsOptions>): Promise<string>
export declare function toMd(params: PluginParams<ToMdOptions>): Promise<string>
export declare function toMock(params: PluginParams<ToMockOptions>): Promise<string>
export declare function mockServer(params: { options: MockServerOptions }): Promise<void>
