'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.foo = foo;
exports.bar = bar;
// 暴露模块：分别暴露
function foo() {
  console.log('module1');
}

function bar() {
  console.log('module1');
}

var arr = exports.arr = [1, 2, 3, 4, 5];