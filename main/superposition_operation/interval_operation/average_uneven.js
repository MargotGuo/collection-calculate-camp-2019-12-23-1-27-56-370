'use strict';

function average_uneven(collection) {

  var oddNumber = collection.filter(function (currentValue) {
    return currentValue % 2 === 1;
  });

  var sum = oddNumber.reduce(function (tempSum, currentValue) {
    return tempSum + currentValue;
  }, 0);

  var average = sum / oddNumber.length;
  return average;
}

module.exports = average_uneven;
