'use strict';
var even_group_calculate_average = function(collection){
  var evenSubscriptNumber = collection.filter(function (currentValue, currentIndex) {
    return currentIndex % 2 === 1;
  });

  var evenNumber = evenSubscriptNumber.filter(function (currentValue) {
    return currentValue % 2 === 0;
  });

  var result = [];;
  if (evenNumber.length) {
    var maxEvenNumber = findMaxEvenNumber(evenNumber);
    var maxLength = maxEvenNumber.toString().length;
    for (var index = 1; index <= maxLength; index++) {
      var tempArr = evenNumber.filter(function (element) {
        return element.toString().length === index;
      });
      if (tempArr.length) {
        var average = getAverage(tempArr);
        result.push(average);
      }
    }
  } else {
    result.push(0);
  }
  return result;
};

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
