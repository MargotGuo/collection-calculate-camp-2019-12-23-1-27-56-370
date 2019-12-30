'use strict';

function get_letter_interval(number_a, number_b) {
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
  return String.fromCharCode(currentNumber + 96);
}

module.exports = get_letter_interval;
