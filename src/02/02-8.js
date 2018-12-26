// CommonJS 방식
var module = require('./MyModule');
function Func() {
  module();
}
module.exports = new Func();

// RequireJS 방식
// define(['./MyModule'], function(module) {
//   function Func() {
//     module();
//   }
//   return new Func();
// });

// ES6 방식
// import MyModule from './MyModule';
// import { ModuleName } from './MyModule';
// import { ModuleName as RenamedModuleName } from './MyModule';

// function Func() {
//   MyModule();
// }
export const CONST_VALUE = 0;
export default new Func();
