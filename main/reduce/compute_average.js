'use strict';

function compute_average(collection) {

  var average = collection.reduce(function (tempAverage, currentValue, currentIndex) {
    return (tempAverage * currentIndex + currentValue) / (currentIndex + 1);
  });
  
  return average;
}

module.exports = compute_average;

