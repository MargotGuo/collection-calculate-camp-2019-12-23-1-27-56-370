'use strict';

function average_uneven(collection) {
  var oddNumber = collection.filter(function (element) {
    return element % 2 === 1;
  });
  var sum = oddNumber.reduce(function (tempResult, currentValue) {
    return tempResult + currentValue;
  }, 0);
  var average = sum / oddNumber.length;
  return average;
}

module.exports = average_uneven;
