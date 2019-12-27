'use strict';

var number_map_to_word = function(collection){
  var charArray = collection.map(numberToChar);
  return charArray;
};

function numberToChar(currentNumber) {
  var currentChar = String.fromCharCode(currentNumber + 96);
  return currentChar;
}

module.exports = number_map_to_word;
