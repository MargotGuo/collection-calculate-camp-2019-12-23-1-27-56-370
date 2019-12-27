'use strict';

function double_to_one(collection) {
  var flatendArray = collection.flat(Infinity);
  var removeExtraElement = flatendArray.filter(function (item, index) {
    return flatendArray.indexOf(item) === index;
  });
  return removeExtraElement;
}

module.exports = double_to_one;
