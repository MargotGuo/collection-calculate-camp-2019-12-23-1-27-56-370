'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  var newArr = collection_a.filter(function (element) {
    var temp = collection_b.filter(function (divider) {
      return element % divider === 0;
    })
    return temp.length !== 0;
  });
  return newArr;
}

module.exports = choose_divisible_integer;
