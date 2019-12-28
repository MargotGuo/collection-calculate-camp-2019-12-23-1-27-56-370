'use strict';

function collect_max_number(collection) {
  
  var maxValue = collection.reduce(function (tempMax, currentValue) {
    return Math.max(tempMax, currentValue);
  });

  return maxValue;
}

module.exports = collect_max_number;
