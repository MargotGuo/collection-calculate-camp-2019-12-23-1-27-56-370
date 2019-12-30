'use strict';

var number_map_to_word = function(collection){
  var charArray = collection.map(numberToChar);
  return charArray;
};

function numberToChar(currentNumber) {
  return String.fromCharCode(currentNumber + 96);
}

module.exports = number_map_to_word;
