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
- 🌟[feature] Converter support **to-schema**, generater schema json files

## v0.1.0
- 🌟[feature] Init version, converter support **to-ts**, **to-md** and **to-mock**