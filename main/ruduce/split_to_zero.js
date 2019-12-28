'use strict';

function spilt_to_zero(number, interval) {

  var outputArray = [number];

  while (number > 0) {
    number -= interval;
    number = Math.round(number * 10) / 10;
    outputArray.push(number);
  } 

  return outputArray;
}

module.exports = spilt_to_zero;
