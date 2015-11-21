'use strict';

module.exports = assert;
function assert(bool, message) {
  if (!bool) {
    throw new Error(message);
  }
}
