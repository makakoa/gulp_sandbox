'use strict';

// promise(function(res) {
//   console.log('here comes ');
//   res('success!');
// }).then(function(v) {
//   console.log(v);
// });

var assert = require('assert');

module.exports = promiseFactory;
function promiseFactory(fn) {
  var promise = {};
  var onFinish;
  var onError = function(error) {
    assert(false, 'Promise error: ' + error);
  };

  promise.then = then;
  function then(cb, errCb) {
    onFinish = cb;
    if (errCb) onError = errCb;
  }

  promise.catch = error;
  promise.error = error;
  function error(cb) {
    onError = cb;
  }

  setTimeout(function() {
    fn(onFinish, onError);
  }, 0);

  return promise;
}

promiseFactory.resolve = resolve;
function resolve(value) {
  return promiseFactory(function(res) {
    res(value);
  });
}
