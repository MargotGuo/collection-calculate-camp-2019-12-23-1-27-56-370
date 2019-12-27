'use strict';

function hybrid_operation(collection) {
  var result = collection.reduce(function (tempResult, currentValue) {
    return tempResult + currentValue * 3 + 2;
  }, 0);
  return result;
}

module.exports = hybrid_operation;

