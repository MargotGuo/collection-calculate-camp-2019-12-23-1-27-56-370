'use strict';

var calculate_average = function(collection){
  var evenSubscriptNumber = collection.filter(function (currentValue, currentIndex) {
    return currentIndex % 2 === 1;
  });

  var evenNumberSum = evenSubscriptNumber.reduce(function (tempSum, currentValue) {
    return tempSum + currentValue;
  });
  
  var evenAverage = evenNumberSum / evenSubscriptNumber.length;
  return evenAverage;
};
module.exports = calculate_average;
