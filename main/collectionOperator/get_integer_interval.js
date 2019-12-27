'use strict';

function get_integer_interval(number_a, number_b) {
  var operation = getOperationType(number_a, number_b) // +1 or -1
  var allNumberArray = getAllNumberArray(number_a, number_b, operation)
  return allNumberArray;
}

function getOperationType(number_a, number_b) {
  var difference = number_b - number_a;
  var interval = difference / Math.abs(difference);
  return interval;
}

function getAllNumberArray(number_a, number_b, operation) {
  var arr = [number_a];
  var newNum = number_a;
  while (newNum !== number_b) {
    newNum += operation;
    arr.push(newNum);
  }
  return arr;
}

module.exports = get_integer_interval;

