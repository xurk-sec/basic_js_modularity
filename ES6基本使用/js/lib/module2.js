'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 统一暴露
function fun() {
  console.log('fun');
}

function fun2() {
  console.log('fun2');
}

// 统一暴露
exports.fun = fun;
exports.fun2 = fun2; // 简写模式