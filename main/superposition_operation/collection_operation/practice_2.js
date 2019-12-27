'use strict';

function hybrid_operation_to_uneven(collection) {
  var oddNumber = collection.filter(function (element) {
    return element % 2 === 1;
  });
  var resultCollection = oddNumber.map(function (element) {
    return element * 3 + 2;
  });
  return resultCollection;
}

module.exports = hybrid_operation_to_uneven;

