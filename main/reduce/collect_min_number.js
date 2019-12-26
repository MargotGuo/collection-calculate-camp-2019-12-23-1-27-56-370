'use strict';

function collect_min_number(collection) {
  var minValue = collection.reduce(function (accumulator, currentValue) {
    return Math.min(accumulator, currentValue);
  });
  return minValue;
}

module.exports = collect_min_number;

