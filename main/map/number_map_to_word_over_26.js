'use strict';

var number_map_to_word_over_26 = function(collection){
  var charArr = collection.map(numberToChar);
  return charArr;
};

function numberToChar(currentNumber) {
  var round = Math.floor((currentNumber - 1) / 26);
  var currentChar;
  if (round) {
    currentChar = String.fromCharCode(round + 96) + String.fromCharCode(currentNumber - 26 * round + 96);
  } else {
    currentChar = String.fromCharCode(currentNumber + 96);
  }
  return currentChar;
}

module.exports = number_map_to_word_over_26;
