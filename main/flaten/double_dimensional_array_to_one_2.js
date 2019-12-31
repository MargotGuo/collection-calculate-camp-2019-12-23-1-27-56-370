'use strict';

function double_to_one(collection) {
  var flatendArray = flatArray(collection);
  var removeExtraElement = flatendArray.filter(function (item, index) {
    return flatendArray.indexOf(item) === index;
  });
  return removeExtraElement;
}

function flatArray(collection) {
  var result = [];
  if (collection instanceof Array) {
    collection.forEach(function (element) {
      result = result.concat(flatArray(element));
    });
  } else {
    result.push(collection);
  }
  return result;
}

module.exports = double_to_one;
