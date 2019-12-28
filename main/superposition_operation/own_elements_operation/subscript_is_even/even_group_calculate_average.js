'use strict';

var even_group_calculate_average = function(collection){
  var evenSubscriptNumber = collection.filter(function (currentValue, currentIndex) {
    return currentIndex % 2 === 1;
  });

  var evenNumber = evenSubscriptNumber.filter(function (currentValue) {
    return currentValue % 2 === 0;
  });

  var result = [];
  if (evenNumber.length) {
    var evenAverage = getEvenAverage(evenNumber);
    result = evenAverage;
  } else {
    result.push(0);
  }

  return result;
};

function getEvenAverage(evenNumber) {
  var averageArray = [];
  var maxEvenNumber = findMaxEvenNumber(evenNumber);
  var maxLength = maxEvenNumber.toString().length;
  for (var magnitude = 1; magnitude <= maxLength; magnitude++) {
    var sameMagnitudeNumber = evenNumber.filter(function (currentValue) {
      return currentValue.toString().length === magnitude;
    });
    if (sameMagnitudeNumber.length) {
      var averageNumber = getAverage(sameMagnitudeNumber);
      averageArray.push(averageNumber);
    }
  }
  return averageArray;
}

function findMaxEvenNumber(array) {
  var sortedArray = array.sort(function (a, b) {
    return b - a;
  });
  var max = sortedArray[0];
  return max;
}

function getAverage(array) {
  var sum = array.reduce(function (tempSum, currentValue) {
    return tempSum + currentValue;
  });
  var average = sum / array.length;
  return average;
}

module.exports = even_group_calculate_average;
