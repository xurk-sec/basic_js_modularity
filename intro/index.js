window.aaaa="assss";
// 时代一
function a1(){
  //...
}

function a2(){
  //...
}


// 时代二
var MYAPP = { 
  foo = function(){},
  bar = function(){}
}

MYAPP.foo();


// 时代三
var module = (function(){
  var na = "aaa"
  var foo = function() {
    console.log(na)
  }

  return {
    foo: foo  //属性名和属性值相同时，可简写为foo: foo ==> foo
  }
})()

module.foo();
module.na;  // undefined


// 时代四
var module2 = function($) { // 行参：用于接收外部依赖
  var bb = "bbb";
  var foo = function() {
    console.log(bb);
  }

  return {
    foo
  }
}(jQuery) // 实参：需要引入的外部依赖

module2.foo();
