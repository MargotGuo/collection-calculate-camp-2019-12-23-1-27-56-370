'use strict';

function collect_min_number(collection) {

  var minValue = collection.reduce(function (tempMin, currentValue) {
    return Math.min(tempMin, currentValue);
  });
  
  return minValue;
}

module.exports = collect_min_number;

