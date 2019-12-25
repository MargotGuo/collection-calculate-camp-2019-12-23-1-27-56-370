'use strict';

function get_letter_interval(number_a, number_b) {
  var arr = [number_a];
  var difference = number_b - number_a;
  var interval = difference / Math.abs(difference);

  var newNum = number_a;
  while (newNum !== number_b) {
    newNum += interval;
    arr.push(newNum);
  }

  var charArr = arr.map(function (element) {
    var element = String.fromCharCode(element + 96);
    return element;
  });

  return charArr;
}

module.exports = get_letter_interval;
