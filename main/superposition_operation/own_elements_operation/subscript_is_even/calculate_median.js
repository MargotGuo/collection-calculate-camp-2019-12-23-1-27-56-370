'use strict';
var calculate_median = function(collection){
  var evenSubscriptNumber = collection.filter(function (currentValue, currentIndex) {
    return currentIndex % 2 === 1;
  });

  var sortArr = evenSubscriptNumber.sort( function (a, b) {
    return a - b;
  });

  var median = getMedian(sortArr);
  return median;
};

function getMedian(array) {
  var len = array.length;
  var median;
  if (len % 2) {
    median = array[(len - 1) / 2];
  } else {
    median = 0.5 * array[len / 2 - 1] + 0.5 * array[len / 2];
  }
  return median;
}

module.exports = calculate_median;
