'use strict';

function collect_max_number(collection) {
  var maxValue = collection.reduce(function (accumulator, currentValue) {
    return Math.max(accumulator, currentValue);
  });
  return maxValue;
}

module.exports = collect_max_number;
