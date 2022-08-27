[![npm version](https://img.shields.io/npm/v/@tooltik/aries.svg)](https://www.npmjs.com/package/@tooltik/aries) [![npm download count](https://img.shields.io/npm/dt/@tooltik/aries.svg)](https://www.npmjs.com/package/@tooltik/aries) [![license](https://img.shields.io/npm/l/@tooltik/aries.svg)](LICENSE) 

## Aries ♈️
Aries is a swagger converter cli, support typescript declaration, markdown docs, mock server and so on

## Support
Swagger 2.0, json or yaml format

## Env
NodeJS >= 12

## Install
```bash
# with npm
npm install @tooltik/aries --save-dev

# with yarn
yarn add @tooltik/aries --dev

# with pnpm
pnpm add @tooltik/aries --save-dev
```

## Usage in command line 
```
aries <command> [options]
```

### Command options
```bash
Commands:
  to-ts [options]    Convert swagger to typescript declaration
  to-md [options]    Convert swagger to markdown docs
  to-mock [options]  Convert swagger to mock json
  mock-server [options]  Start a local server to return the mock interface
```

#### to-ts
```
Options:
  -u, --url <url>       Swagger link to generate, support relative path or remote url
  -o --output <output>  Specify output file path (default: "./swagger.types.ts")
  --no-autoRequired     Do not generate the property as required automatically when there is no required array in definitions
```

#### to-md
```
Options:
  -u, --url <url>       Swagger link to generate, support relative path or remote url
  -o --output <output>  Specify output file path (default: "./swagger.docs.md")
  --no-autoMock         Do not generate the mock samples automatically when there is no example in schema
```

#### to-mock
```
Options:
  -u, --url <url>       Swagger link to generate, support relative path or remote url
  -o --output <output>  Specify output file path (default: "./swagger.mock.json")
  --no-autoMock         Do not generate the mock response automatically when there is no example in schema
```

#### mock-server
```
Options:
  -u, --url <url>       Swagger link, support relative path or remote url
  -p, --port <port>     Mock server port (default: 3000)
  --no-autoMock         Do not generate the mock response automatically when there is no example in schema
```

### .ariesrc
Add `.ariesrc.ts` or `.ariesrc.js` in your project root directory. Support all options in command. And the command line has a higher priority than `.ariesrc`

| Property | Type  | Required | Default | Description |
| ----- | ----- | ----- | ----- | ----- |
| url | string | Y | - | swagger url, support relative path and remote url |
| output | string | Y | - | output file path |
| autoMock | boolean | N | true | we use example to generate mock data by default, using `autoMock` to determine whether mock automatically when there is no example in schema when using `to-md/to-mock/mock-server` |
| formatMock | function | N | - | format the mock response or samples when using `to-md/to-mock/mock-server`, the parameter is origin mock data generated by example or autoMock |
| autoRequired | boolean | N | true | determine whether the property is required by default when there is no required property in schema when using `to-ts` |
| formatProp | function | N | - | format the property in typescript declaration when using `to-ts`, the parameter is the property name |
| port | number | N | 3000 | change the mock server port when using `mock-server` |

#### .ariesrc samples
```typescript
// .ariesrc.ts
import { defineConfig } from '@tooltik/aries'

export default defineConfig({
  url: './swagger.json',
  autoMock: true,
  autoRequired: true,
})
```

## Usage in ES Module/CommonJS
Support all  options in `.ariesrc.ts`

```javascript
import { toTs, toMd, mockServer } from '@tooltik/aries'

toTs({
    url: './test/swagger.json',
    output: './test/output.node.swagger.types.ts',
    autoRequired: true,
})
    
toMd({
    url: './test/swagger.json',
    output: './test/output.node.swagger.docs.md',
    autoMock: true,
    formatMock: (data) => {
      return {
          code: 0,
          msg: 'success',
          data,
      }
    },
})

mockServer({
  url: './test/swagger.json',
  port: 3000,
  autoMock: true,
  formatMock: (data) => {
    return {
        code: 0,
        msg: 'success',
        data,
    }
  },
})
```

## Dev
Install
```bash
pnpm install
```

Link package
```bash
pnpm link --global
```

Run dev watch
```bash
pnpm dev
```

Make changes and run test
```bash
pnpm test-gen
```

Uninstall
```bash
pnpm rm --global @tooltik/aries
```

## LICENSE
MIT