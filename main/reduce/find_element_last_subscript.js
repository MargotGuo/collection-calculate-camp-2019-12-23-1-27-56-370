'use strict';

function calculate_elements_sum(collection, element) {
  var elementIndex = collection.reduce(function (accumulator, currentValue, currentIndex) {
    if (element === currentValue) {
      accumulator = currentIndex;
      return accumulator;
    }
    return accumulator;
  });
  return elementIndex;
}

module.exports = calculate_elements_sum;
