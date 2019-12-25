'use strict';

function double_to_one(collection) {
  var newArr = [];
  collection.forEach(function (element) {
    var connectArr = element.filter(function (number) {
      return newArr.indexOf(number) === -1;
    });
    newArr = newArr.concat(connectArr);
  });
  return newArr;
}

module.exports = double_to_one;
