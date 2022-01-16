[![npm version](https://img.shields.io/npm/v/@tooltik/aries.svg)](https://www.npmjs.com/package/@tooltik/aries) [![npm download count](https://img.shields.io/npm/dt/@tooltik/aries.svg)](https://www.npmjs.com/package/@tooltik/aries) [![license](https://img.shields.io/npm/l/@tooltik/aries.svg)](LICENSE) 

## Aries ♈️
Aries is a swagger converter cli, support typescript declaration, markdown docs, mock json and so on

## Install
```
npm install @tooltik/aries --save-dev

# or

yarn add @tooltik/aries --dev
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
  --no-autoRequired     Do not generate the property as required automatically
                        when there is no required array in definitions
```

#### to-md
```
Options:
  -u, --url <url>       Swagger link to generate, support relative path or
                        remote url
  -o --output <output>  Specify output file path, default is ./swagger.docs.md
                        (default: "./swagger.docs.md")
  --no-autoMock         Do not generate the mock samples automatically when
                        there is no example in schema
```

#### to-mock
```
Options:
  -u, --url <url>       Swagger link to generate, support relative path or
                        remote url
  -o --output <output>  Specify output file path, default is ./swagger.mock.json
                        (default: "./swagger.mock.json")
  --no-autoMock         Do not generate the mock response automatically when
                        there is no example in schema
```

### .ariesrc.js
Add `.ariesrc.js` in your project root directory. Support all options in command.And the command line has a higher priority than `.ariesrc.js`

#### url
Swagger url, support relative path and remote url

#### output
Output file path

#### autoMock
Determine whether mock automatically when there is no example in schema, default is `True`. Affects `to-md` and `to-mock`

#### resTemplate
Custom the mock response data struct, default is `"$data"`.`$data` will be replaced by the mock data in `to-md/to-mock`

#### autoRequired
Determine whether the property is required when there is no required in schema, default is `True`

#### formatProp
Format the property in typescript declaration.The parameter is the property name

e.g.

```
// .ariesrc.js
module.exports = {
  url: './test/swagger.json',
  autoMock: true,
  resTemplate: '{"code":0,"msg":"success","data":$data}',
  autoRequired: true,
  formatProp: (prop) => {
    // Add prop format
    return prop
  }
}
```

## Support
- swagger 2.0
- node >= 12

## LICENSE
MIT