// 定义有依赖的模块

define('nameAlerter',['dataService'], function(dataService) { // 这里dataService不代表dataService.js文件。这里只是为了方便，真正找到dataService.js文件是通过主模块内的路由配置require.conig。因此该变量名会转为对应的路径地址，因此能够找到对应文件。为什么function的行参也叫dataservice
  let msg = 'alerter.js';
  function showMsg() {
    console.log(msg, dataService.getName());
  }

  // 暴露模块
  return {showMsg};
})