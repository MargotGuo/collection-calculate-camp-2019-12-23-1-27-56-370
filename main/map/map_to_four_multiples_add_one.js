'use strict';
var map_to_four_multiples_add_one = function(collection){
  var newArr = collection.map(function (element) {
    return element * 4 + 1;
  });
  return newArr;
};

module.exports = map_to_four_multiples_add_one;
