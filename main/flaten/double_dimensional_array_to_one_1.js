'use strict';

function double_to_one(collection) {
  var newArr = [];
  collection.forEach(function (element) {
    if (typeof element === 'number') {
      newArr = newArr.concat([element]);
    } else {
      newArr = newArr.concat(element);
    }
  });
  return newArr;
}

module.exports = double_to_one;
