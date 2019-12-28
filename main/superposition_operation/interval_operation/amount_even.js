'use strict';

function amount_even(collection) {

  var evenNumber = collection.filter(function (currentValue) {
    return currentValue % 2 === 0;
  });

  var sum = evenNumber.reduce(function (tempSum, currentValue) {
    return tempSum + currentValue;
  }, 0);

  return sum;
}

module.exports = amount_even;
