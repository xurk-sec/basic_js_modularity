// 引入其他模块

// 语法： import xxx from '路径'

// import module1 from './module1'
import {foo, bar} from './module1';

import {fun, fun2} from './module2'
// 用了import（ES6）还不用babel转ES5的话：Uncaught SyntaxError: Cannot use import statement outside a module

import randomName from './module3'
randomName.foo();

// console.log(module1, module2)