'use strict';

function find_first_even(collection) {

  var firstEvenNumber = collection.reduce(function (tempValue, currentValue) {
    if (tempValue % 2 && !(currentValue % 2)) {
      return currentValue;
    }
    return tempValue;
  });
  
  return firstEvenNumber;
}

module.exports = find_first_even;