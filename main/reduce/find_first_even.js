'use strict';

function find_first_even(collection) {
  var firstEvenNum = collection.reduce(function (accumulator, currentValue) {
    if (accumulator % 2 !== 0 && currentValue % 2 === 0) {
      return currentValue;
    }
    return accumulator;
  });
  return firstEvenNum;
}

module.exports = find_first_even;