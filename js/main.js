(function() {
  'use strict';

  //双方向データバインディングができる。
  var vm = new Vue ({
    el: '#app',
    data: {
      todos: [
        'task 1',
        'task 2',
        'task 3',
      ]
    }
  });
})();