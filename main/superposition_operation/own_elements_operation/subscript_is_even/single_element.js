'use strict';

var single_element = function(collection){
  var evenNumber = collection.filter(function (currentValue, currentIndex) {
    return currentIndex % 2 === 1;
  });

  var result = evenNumber.filter(function (currentValue) {
    return evenNumber.indexOf(currentValue) === evenNumber.lastIndexOf(currentValue);
  });

  return result;
};
module.exports = single_element;
