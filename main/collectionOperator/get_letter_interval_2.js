'use strict';

function get_letter_interval_2(number_a, number_b) {
  var arr = [number_a];
  var difference = number_b - number_a;
  var interval = difference / Math.abs(difference);

  var newNum = number_a;
  while (newNum !== number_b) {
    newNum += interval;
    arr.push(newNum);
  }

  var charArr = arr.map(function (element) {
    var round = Math.ceil(element / 26) 
    var newElement;
    if (round === 1) {
      newElement = String.fromCharCode(element + 96);
    } else {
      newElement = String.fromCharCode(round + 95) + String.fromCharCode(element - 26 * (round - 1) + 96)
    }
    return newElement;
  });

  return charArr;
}

module.exports = get_letter_interval_2;

