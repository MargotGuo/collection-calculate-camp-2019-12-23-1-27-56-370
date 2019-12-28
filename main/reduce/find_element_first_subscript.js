'use strict';

function calculate_elements_sum(collection, element) {

  var countStatus = true;
  var firstSubscipt = collection.reduce(function (tempIndex, currentValue, currentIndex) {
    if (currentValue === element && countStatus) {
      countStatus = false;
      return currentIndex;
    }
    return tempIndex;
  });

  return firstSubscipt;
}

module.exports = calculate_elements_sum;

