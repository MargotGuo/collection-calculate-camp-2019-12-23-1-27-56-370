'use strict';

function average_to_letter(collection) {

  var average = collection.reduce(function(tempAverage, currentValue, currentIndex) {
    return (tempAverage * currentIndex + currentValue) / (currentIndex + 1);
  });
  
  return String.fromCharCode(Math.ceil(average) + 96);
}

module.exports = average_to_letter;

