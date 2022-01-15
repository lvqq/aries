export interface AriesOptions {
  url: string;
  output: string;
  autoMock: boolean;
  resTemplate: string;
  autoRequired: boolean;
  formatProp: (prop: string) => string
}

export interface PluginParams {
  options: AriesOptions;
  swagger: any
}

export declare function toTs(params: PluginParams): Promise<string>
export declare function toMd(params: PluginParams): Promise<string>
export declare function toMock(params: PluginParams): Promise<string>
