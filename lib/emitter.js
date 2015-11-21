'use strict';

var _ = require('lodash'),
    assert = require('assert');

module.exports = emitterFactory;
function emitterFactory() {
  var emitter = {};
  var listeners = {};

  emitter.emit = emit;
  function emit(eventName, value) {
    assert(listeners[eventName], 'No listener for ' + eventName);
    _.each(listeners[eventName], function(fn) {
      fn(value);
    });
  }

  emitter.on = on;
  function on(eventName, cb) {
    if (listeners[eventName]) {
      listeners[eventName].push(cb);
    } else {
      listeners[eventName] = [cb];
    }
  }
}
