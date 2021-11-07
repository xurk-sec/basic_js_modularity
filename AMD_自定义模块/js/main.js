// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);

(function () {


  // var requirejs = require('requirejs');

  requirejs.config({      // 有了路由就不用在index.html引入一大堆文件了，只需指明当前主模块的路径即可
    baseUrl: './js',    // 会在所有的path前加上这一段路径
    paths: {
      dataService: './modules/dataService',  // 不用加文件后缀.js AMD会自动加上.js
      nameAlerter: './modules/alerter',
      jquery: './libs/jquery',
      Angular: './libs/angular',
    },
    shim: {
      Angular: {
        exports: 'angular'
      }
    }
  });

  requirejs(['nameAlerter'], function(alerter) {
    alerter.showMsg();
  })

  // requirejs(['jquery', 'Angular'], function($, aNgular){
  //   console.log($);
  //   console.log(aNgular)
  // })
})();