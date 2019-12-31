'use strict';

function double_to_one(collection) {
  var result = [];
  if (collection instanceof Array) {
    collection.forEach(function (element) {
      result = result.concat(double_to_one(element));
    });
  } else {
    result.push(collection);
  }
  return result;
}

module.exports = double_to_one;
