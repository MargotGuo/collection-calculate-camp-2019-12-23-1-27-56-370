'use strict';

function compute_average(collection) {
  var average = collection.reduce(function (accumulator, currentValue, currentIndex) {
    return (accumulator * currentIndex + currentValue) / (currentIndex + 1);
  });
  return average;
}

module.exports = compute_average;

