'use strict';

function median_to_letter(collection) {
  var sortArr = collection.sort(function (a, b) {
    return a - b;
  });

  var len = sortArr.length;
  var median;
  if (len % 2) {
    median = sortArr[Math.ceil(len / 2) - 1];
  } else {
    median = Math.ceil(0.5 * sortArr[len / 2 - 1] + 0.5 * sortArr[len / 2]);
  }

  var round = Math.ceil(median / 26) 
  var letter;
  if (round === 1) {
    letter = String.fromCharCode(median + 96);
  } else {
    letter = String.fromCharCode(round + 95) + String.fromCharCode(median - 26 * (round - 1) + 96)
  }

  return letter;
}

module.exports = median_to_letter;
