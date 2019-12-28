'use strict';

function calculate_elements_sum(collection) {

  var sum = collection.reduce(function (tempSum, currentValue) {
    return tempSum + currentValue;
  });
  
  return sum;
}

module.exports = calculate_elements_sum;

