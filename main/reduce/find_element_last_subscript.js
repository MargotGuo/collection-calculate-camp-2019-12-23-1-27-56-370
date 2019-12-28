'use strict';

function calculate_elements_sum(collection, element) {

  var lastSubscript = collection.reduce(function (tempIndex, currentValue, currentIndex) {
    if (element === currentValue) {
      return currentIndex;
    }
    return tempIndex;
  });
  
  return lastSubscript;
}

module.exports = calculate_elements_sum;
