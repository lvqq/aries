import { AriesConfig } from '../interface';

export const formatValidNamesByPath = (path: string) =>
  path
    // begin with capital letters
    .replace(path[0], path[0].toUpperCase())
    // delete invalid char
    .replace(/{|}|:|\./g, '')
    // _a or /a to A
    .replace(/(?:(_|\/))+([^_])/g, (_$0, _$1, $2) => $2.toUpperCase());

export const defineConfig = (config: AriesConfig) => config;
