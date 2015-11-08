'use strict';

console.log('---Sandox---');

window.onload = function() {

  var mainEl = document.getElementById('app');
  console.log(mainEl);

  mainEl.innerText = 'hello ' + Math.floor(Math.random() * 100);


};
