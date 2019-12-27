'use strict';
var is_exist_element = function(collection, element){
  var evenNumber = collection.filter(function (currentValue, currentIndex) {
    return currentIndex % 2 === 0;
  });
  var elementIndex = evenNumber.indexOf(element);
  if (elementIndex === -1) {
    return false;
  }
  return true;
};
module.exports = is_exist_element;
