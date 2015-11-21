'use strict';

var _ = require('lodash');

var observable = require('../lib/observable'),
    stream = require('../lib/stream'),
    promise = require('../lib/promise'),
    assert = require('../lib/assert'),
    emitter = require('../lib/emitter');

console.log('---Sandox---');

window.onload = function() {

  var mainEl = document.getElementById('app');
  assert(mainEl, 'Could not find main element');
  console.log(mainEl);

  var o = observable('hello');
  console.log('get', o.get());
  o.onChange(function(v) {
    console.log('change', v);
  });
  o.set('goodbye');
  console.log('last', o.get());


  addText(mainEl, 'hello ' + Math.floor(Math.random() * 1000));
  setAttrs(mainEl, {class: 'lead'});
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
