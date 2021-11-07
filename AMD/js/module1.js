(function(window, module2){
  var msg = 'm1';
  function showMsg() {
    console.log(window,msg, module2.getName());
  }
  window.module1 = {showMsg}
})(window, module2)