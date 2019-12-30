'use strict';

function double_to_one(collection) {
  var flatendArray = flatArray(collection);
  var removeExtraElement = flatendArray.filter(function (item, index) {
    return flatendArray.indexOf(item) === index;
  });
  return removeExtraElement;
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

module.exports = double_to_one;
