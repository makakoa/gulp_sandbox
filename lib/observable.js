'use strict';

var _ = require('lodash');

module.exports = observableFactory;
function observableFactory(value) {
  var observable = {};
  var currentValue = value;
  var fns = [];

  observable.get = get;
  function get() {
    return currentValue;
  }

  observable.set = set;
  function set(value) {
    currentValue = value;
    if (fns.length) _.each(fns, function(fn) {fn(value);});
  }

  observable.onChange = function(cb) {
    fns.push(cb);
  };

  return observable;
}
