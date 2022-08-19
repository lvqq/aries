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

export declare function toTs(params: ToTsOptions ): Promise<void>
export declare function toMd(params: ToMdOptions ): Promise<void>
export declare function toMock(params: ToMockOptions ): Promise<void>
export declare function mockServer(params: MockServerOptions ): Promise<void>
