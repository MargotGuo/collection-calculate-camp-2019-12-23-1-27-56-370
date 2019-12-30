'use strict';

function collect_same_elements(collection_a, collection_b) {

  var elementInB = flatArray(collection_b);

  var elementInCommon = collection_a.filter(function (currentValue) {
    return elementInB.includes(currentValue);
  });

  return elementInCommon;
}

function flatArray(collection) {
  var result = flaten(collection);
  return result;
}

function flaten(array) {
  var result = [];
  for (var i = 0, len = array.length; i < len; i++) {
    if (array[i] instanceof Array) {
      var newArray = flaten(array[i]);
      result = result.concat(newArray);
    } else {
      result.push(array[i]);
    }
  }
  return result;
}
module.exports = collect_same_elements;
