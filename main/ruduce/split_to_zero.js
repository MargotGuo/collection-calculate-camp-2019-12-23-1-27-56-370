'use strict';

function spilt_to_zero(number, interval) {
  var outputArr = [number];
  while (number > 0) {
    number -= interval;
    number = Math.round(number * 10) / 10;
    outputArr.push(number);
  } 
  return outputArr;
}

module.exports = spilt_to_zero;
