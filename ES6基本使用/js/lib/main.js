'use strict';

var _module = require('./module1');

var _module2 = require('./module2');

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_module4.default.foo();

// console.log(module1, module2)

// 用了import（ES6）还不用babel转ES5的话：Uncaught SyntaxError: Cannot use import statement outside a module

// 引入其他模块

// 语法： import xxx from '路径'

// import module1 from './module1'