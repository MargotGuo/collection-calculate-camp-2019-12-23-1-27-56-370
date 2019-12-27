'use strict';

function amount_even(collection) {
  var evenNumber = collection.filter(function (element) {
    return element % 2 === 0;
  });
  var sum = evenNumber.reduce(function (tempResult, currentValue) {
    return tempResult + currentValue;
  }, 0);
  return sum;
}

module.exports = amount_even;
