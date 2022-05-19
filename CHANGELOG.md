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