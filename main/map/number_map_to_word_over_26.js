'use strict';

var number_map_to_word_over_26 = function(collection){
  var charArr = collection.map(numberToChar);
  return charArr;
};

function numberToChar (currentNumber) {
  var quotient = Math.floor((currentNumber - 1) / 26);
  var remainder = (currentNumber - 1) % 26;
  if (quotient === 0) {
    return String.fromCharCode(remainder + 97);
  } else {
    return numberToChar(quotient) + String.fromCharCode(remainder + 97);
  }
}

module.exports = number_map_to_word_over_26;
