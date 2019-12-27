'use strict';
var single_element = function(collection){
  var evenNumber = collection.filter(function (currentValue, currentIndex) {
    return currentIndex % 2 === 1;
  });
  var result = [];
  evenNumber.forEach(function (element) {
    if (evenNumber.indexOf(element) === evenNumber.lastIndexOf(element)) {
      result.push(element);
    }
  });
  return result;
};
module.exports = single_element;
