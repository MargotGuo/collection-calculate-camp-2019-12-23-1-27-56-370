'use strict';

function median_to_letter(collection) {
  var sortArr = collection.sort(function (a, b) {
    return a - b;
  });
  var median = getMedian(sortArr);
  var letter = numberToChar(median);
  return letter;
}

function getMedian(array) {
  var len = array.length;
  var median;
  if (len % 2) {
    median = array[(len - 1) / 2];
  } else {
    median = Math.ceil(0.5 * array[len / 2 - 1] + 0.5 * array[len / 2]);
  }
  return median;
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

module.exports = median_to_letter;
