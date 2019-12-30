'use strict';

function double_to_one(collection) {
  // var flatendArray = collection.flat(Infinity);
  // return flatendArray;
  // 培训系统不认 .flat() 方法..于是只好自己写递归orz

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
