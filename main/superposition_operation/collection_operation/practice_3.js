'use strict';

function hybrid_operation_to_uneven(collection) {
  var oddNumber = collection.filter(function (element) {
    return element % 2 === 1;
  });
  var operateResult = oddNumber.map(function (element) {
    return element * 3 + 5;
  });
  var sum = operateResult.reduce(function (tempResult, currentValue) {
    return tempResult + currentValue;
  }, 0);
  return sum;
}

module.exports = hybrid_operation_to_uneven;

