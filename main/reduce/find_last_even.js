'use strict';

function find_last_even(collection) {

  var lastEvenNumber = collection.reduce(function (tempValue, currentValue) {
    if (currentValue % 2 === 0) {
      return currentValue;
    }
    return tempValue;
  });
  
  return lastEvenNumber;
}

module.exports = find_last_even;
