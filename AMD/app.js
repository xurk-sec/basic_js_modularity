// 主模块，不需要暴露，只需将别的模块引入进来
// const module1x = require('./js/module1.js'); 为什么这里不能用require

(function(module1x){
  module1x.showMsg();
})(module1x)