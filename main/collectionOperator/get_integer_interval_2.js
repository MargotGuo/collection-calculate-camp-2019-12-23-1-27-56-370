'use strict';

function get_integer_interval_2(number_a, number_b) {
  var operation = getOperationType(number_a, number_b); // +1 or -1

  var numberArray = [];
  for (var i = number_a; i != number_b; i += operation) {
    numberArray.push(i);
  }
  numberArray.push(number_b);

  var evenNumberArray = numberArray.filter(isEvenNumber);
  return evenNumberArray;
}

function getOperationType(number_a, number_b) {
  var difference = number_b - number_a;
  var interval = difference / Math.abs(difference);
  return interval;
}

function isEvenNumber(number) {
  return number % 2 === 0;
}

module.exports = get_integer_interval_2;
