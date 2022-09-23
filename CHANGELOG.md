## v0.12.0
- 🌟[feature] support `pattern` config of glob rule to match url
- 🌟[feature] `formatMock` function now support 2nd param path & 3rd param method
- 🐞[fix] path resolve error in output, add transform from relative path to absolut path
- ⚡[refactor] rewrite all test cases, and add new test cases for core modules

## v0.11.3
- 🐞[fix] function call in esm/cjs will not read `.ariesrc` now
- 🐞[fix] fix some ci errors
- ⚡[refactor] add test cases for mock-server

## v0.11.2
- 🐞[fix] path separate char error while cross platform
- 🐞[fix] fix esbuild warning with `require.resolve`
- ⚡[refactor] use jest to write test cases
- ⚡[refactor] add github workflow

## v0.11.1
- 🐞[fix] `.ariesrc.ts` require failed, add `esbuild` to build
- 🐞[fix] husky script error while installing
- 🐞[fix] rm script error while cross platform
- 🐞[fix] the mock data won't be generated randomly while `autoMock=false`
- 🐞[fix] remove `formatProp` feature 
- ⚡[refactor] support esm fully
- ⚡[refactor] migrate bundle from tsc to tsup

## v0.11.0
- 🌟[feature] support **to-request**, generate request function of axios
- 🐞[fix] dev husky hooks not work

## v0.10.0
- 🌟[feature] support esmodule import
- 🌟[feature] support .ariesrc.ts
- ⚡[refactor] refactor with typescript

## v0.9.0
- 🌟[feature] support same way of function calling in NodeJS
- 🌟[feature] TypeScript declaration sync changes
- ⚡[refactor] complete test cases in using NodeJS
- ⚡[refactor] migrate from yarn to pnpm

## v0.8.0
### Breaking Changes
- 🐞[fix] path with underscore style now will be converted to hump style in interface declaration name

e.g.
```javascript
// [Get]/ping_test
// before
export interface GetPing_test {}
// after
export interface GetPingTest {}
```

## v0.7.0
- 🌟[feature] support swagger yaml format

## v0.6.3
- 🐞[fix] cors error in `mock-server`
- 🐞[fix] use `formatMock` instead of `resTemplate`
- ⚡[chore] add prettier to autofix code style

## v0.6.2
- 🐞[fix] `allOf` usage in swagger return `undefined`
- 🐞[fix] add "" in typescript prop if there has an invalid char
- 🐞[fix] indent error in to-ts
- 🐞[fix] bool type now return boolean in to-ts

## v0.6.1
- 🐞[fix] remove `String.prototype.replaceAll()` usage which was supported after NodeJS 15.0.0

## v0.6.0
- 🌟[feature] support mock-server to start a local server to return the mock interface
- ⚡[refactor] optimize interface declaration in index.d.ts

## v0.5.2
- 🐞[fix] log message error in fetch swagger

## v0.5.1
- ⚡[refactor] optimize command line options
- ⚡[refactor] add index.d.ts

## v0.5.0
- 🌟[feature] support parameters and responses in to-ts
- 🌟[feature] add js doc comment in parameters/responses ts declaration
- 🌟[feature] support type File in to-ts 
- 🐞[fix] log message error in file generate
- 🐞[fix] reserve `$ref` in parser when parse schem

## v0.4.0
- 🌟[feature] support `defaultRequired` config in `.ariesrc.js` to determine whether the property is required when there is no required in schema
- 🌟[feature] support `formatProp` config in `.ariesrc.js` to format the property in typescript declaration
- ⚡[refactor] use parser to generate ts instead of dtsgenerator
- 🐞[fix] stack overflow in ring
- 🐞[fix] parser throw error in some cases

## v0.3.0
- 🌟[feature] support `autoMock` config in `.ariesrc.js` to determine whether mock automatically when there is no example in schema
- 🌟[feature] support `resTemplate` config in `.ariesrc.js` to custom the mock response data struct
- ⚡[refactor] rewrite parser 
- ⚡[refactor] remove to-schema, an unnecessary feature
- 🐞[fix] some cases convert missing in md/mock mode

## v0.2.1
- ⚡[chore] add eslint
- 🐞[fix] fix eslint error and CRLF error

## v0.2.0
- 🌟[feature] Converter support **to-schema**, generate schema json files

## v0.1.0
- 🌟[feature] Init version, converter support **to-ts**, **to-md** and **to-mock**