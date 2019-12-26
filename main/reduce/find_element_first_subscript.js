'use strict';

function calculate_elements_sum(collection, element) {
  var elementIndex = collection.reduce(function (outputIndex, currentValue, currentIndex) {
    if (currentValue !== element && currentIndex === outputIndex) {
      return outputIndex + 1;
    }
    return outputIndex;
  }, 0);
  return elementIndex;
}

module.exports = calculate_elements_sum;

