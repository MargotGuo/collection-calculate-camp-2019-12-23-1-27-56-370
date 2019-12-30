'use strict';

function get_letter_interval_2(number_a, number_b) {
  var operation = getOperationType(number_a, number_b); // +1 or -1

  var numberArray = [];
  for (var i = number_a; i != number_b; i += operation) {
    numberArray.push(i);
  }
  numberArray.push(number_b);

  var charArray = numberArray.map(numberToChar);
  return charArray;
}

function getOperationType(number_a, number_b) {
  var difference = number_b - number_a;
  var interval = difference / Math.abs(difference);
  return interval;
}

function numberToChar (currentNumber) {
  var quotient = Math.floor((currentNumber - 1) / 26);
  var remainder = (currentNumber - 1) % 26;
  if (quotient === 0) {
    return String.fromCharCode(remainder + 97);
  } else {
    return numberToChar(quotient) + String.fromCharCode(remainder + 97);
  }
}

module.exports = get_letter_interval_2;

