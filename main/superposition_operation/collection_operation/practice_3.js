'use strict';

function hybrid_operation_to_uneven(collection) {

  var oddNumber = collection.filter(function (currentValue) {
    return currentValue % 2 === 1;
  });

  var operateResult = oddNumber.map(function (currentValue) {
    return currentValue * 3 + 5;
  });

  var sum = operateResult.reduce(function (tempSum, currentValue) {
    return tempSum + currentValue;
  }, 0);

  return sum;
}

module.exports = hybrid_operation_to_uneven;

