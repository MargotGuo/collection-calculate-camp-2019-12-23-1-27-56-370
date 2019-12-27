'use strict';
var calculate_median = function(collection){
  var evenSubscriptNumber = collection.filter(function (currentValue, currentIndex) {
    return currentIndex % 2 === 1;
  });

  var sortArr = evenSubscriptNumber.sort( function (a, b) {
    return a - b;
  });

  var len = sortArr.length;
  var result;
  if (len % 2) {
    result = sortArr[Math.ceil(len / 2) - 1];
  } else {
    result = 0.5 * sortArr[len / 2 - 1] + 0.5 * sortArr[len / 2];
  }
  return Number(result);
};

module.exports = calculate_median;
