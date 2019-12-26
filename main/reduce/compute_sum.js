'use strict';

function calculate_elements_sum(collection) {
  var sum = collection.reduce(function (sum, currentNum) {
    return sum + currentNum;
  });
  return sum;
}

module.exports = calculate_elements_sum;

