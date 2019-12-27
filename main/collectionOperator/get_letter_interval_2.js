'use strict';

function get_letter_interval_2(number_a, number_b) {
  var operation = getOperationType(number_a, number_b); // +1 or -1
  var allNumberArray = getAllNumberArray(number_a, number_b, operation);
  var allCharArray = allNumberArray.map(numberToChar);
  return allCharArray;
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

function numberToChar (currentNumber) {
  var round = Math.floor((currentNumber - 1) / 26);
  var currentChar;
  if (round) {
    currentChar = String.fromCharCode(round + 96) + String.fromCharCode(currentNumber - 26 * round + 96);
  } else {
    currentChar = String.fromCharCode(currentNumber + 96);
  }
  return currentChar;
}

module.exports = get_letter_interval_2;

