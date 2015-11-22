'use strict';

var _ = require('lodash');

var observable = require('../lib/observable');
// var stream = require('../lib/stream');
// var promise = require('../lib/promise');
var assert = require('../lib/assert');
// var emitter = require('../lib/emitter');

console.log('---Sandox---');

window.onload = function() {

  var mainEl = document.getElementById('app');
  assert(mainEl, 'Could not find main element');
  console.log(mainEl);

  var timeEl = el('timer');
  setAttrs(timeEl, {class: 'lead'});

  var timer = observable(Date.now());
  window.setInterval(function() {
    timer.set(Date.now());
  }, 453);
  timer.onChange(function(v) {
    timeEl.innerText = v;
  });

  addText(mainEl, 'hello ' + Math.floor(Math.random() * 1000));
  setAttrs(mainEl, {class: 'h1'});
  mainEl.appendChild(timeEl);
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
