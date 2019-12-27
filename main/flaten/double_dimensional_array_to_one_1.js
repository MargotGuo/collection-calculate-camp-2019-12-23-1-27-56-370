'use strict';

function double_to_one(collection) {
  var flatendArray = collection.flat(Infinity);
  return flatendArray;
}

module.exports = double_to_one;
