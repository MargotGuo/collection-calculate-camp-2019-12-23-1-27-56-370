'use strict';

function median_to_letter(collection) {
  var sortArr = collection.sort(function (a, b) {
    return a - b;
  });
  var median = getMedian(sortArr);
  var letter = numberToLetter(median);
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

function numberToLetter(number) {
  var round = Math.floor((number - 1) / 26);
  var letter;
  if (round) {
    letter = String.fromCharCode(round + 96) + String.fromCharCode(number - 26 * round+ 96);
  } else {
    letter = String.fromCharCode(number + 96);
  }
  return letter;
}

module.exports = median_to_letter;
