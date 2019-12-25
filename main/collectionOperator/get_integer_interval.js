'use strict';

function get_integer_interval(number_a, number_b) {
  var arr = [number_a];
  var difference = number_b - number_a;
  var interval = difference / Math.abs(difference);

  var newNum = number_a;
  while (newNum !== number_b) {
    newNum += interval;
    arr.push(newNum);
  }

  return arr;
}

module.exports = get_integer_interval;

