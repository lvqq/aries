[![npm version](https://img.shields.io/npm/v/@tooltik/aries.svg)](https://www.npmjs.com/package/@tooltik/aries) [![npm download count](https://img.shields.io/npm/dt/@tooltik/aries.svg)](https://www.npmjs.com/package/@tooltik/aries) [![license](https://img.shields.io/npm/l/@tooltik/aries.svg)](LICENSE) 

## Aries ♈️
Aries is a swagger converter cli, support TypeScript declaration, markdown docs, mock json and so on

## Install
```
npm install -D @tooltik/aries
```

## Usage
```
aries <command> [options]
```

### Command options
```
Commands:
  to-ts [options]    Convert swagger to typescript declaration
  to-md [options]    Convert swagger to markdown docs
  to-mock [options]  Convert swagger to mock json
```

#### to-ts
```
Options:
  -u, --url <url>       Swagger link to generate, support relative path or
                        remote url
  -o --output <output>  Specify output file path, default is ./swagger.types.ts
                        (default: "./swagger.types.ts")
```

#### to-md
```
Options:
  -u, --url <url>       Swagger link to generate, support relative path or
                        remote url
  -o --output <output>  Specify output file path, default is ./swagger.docs.md
                        (default: "./swagger.docs.md")
```

### to-mock
```
Options:
  -u, --url <url>       Swagger link to generate, support relative path or
                        remote url
  -o --output <output>  Specify output file path, default is ./swagger.mock.json
                        (default: "./swagger.mock.js")
```

### .ariesrc.js
Add `.ariesrc.js` in your project root directory, support all options in command. e.g.

```
// .ariesrc.js
module.exports = {
  output: './test/swagger.json'
}
```

## LICENSE
MIT