'use strict';

var _ = require('lodash');

console.log('---Sandox---');

window.onload = function() {

  var mainEl = document.getElementById('app');

  console.log(mainEl);

  addText(mainEl, 'hello ' + Math.floor(Math.random() * 100));
  setAttrs(mainEl, {class: 'lead'});

  var div = el('div');
  mainEl.appendChild(div);
  addText(div, 'holla');

  console.log(div);
  clear(div);
};

console.log('element', document.createElement('Test-Element'));
function el(tag) {
  return document.createElement(tag);
}

console.log('textnode', document.createTextNode('Test Text Node'));
function addText(el, t) {
  el.appendChild(document.createTextNode(t));
}

function setAttrs(el, attrs) {
  _.forEach(attrs, function(v, k) {
    el.setAttribute(k, v);
  });
}

function clear(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}
