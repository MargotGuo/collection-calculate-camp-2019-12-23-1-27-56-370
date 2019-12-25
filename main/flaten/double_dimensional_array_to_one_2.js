'use strict';

function double_to_one(collection) {
  var temp = collection.flat(Infinity);
  var newArr = temp.filter(function (item, index) {
    return temp.indexOf(item) === index;
  });
  return newArr;
}

module.exports = double_to_one;
