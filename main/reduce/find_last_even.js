'use strict';

function find_last_even(collection) {
  var lastEvenNum = collection.reduce(function (accumulator, currentValue) {
    if (currentValue % 2 === 0) {
      accumulator = currentValue;
      return accumulator;
    }
    return accumulator;
  });
  return lastEvenNum;
}

module.exports = find_last_even;
