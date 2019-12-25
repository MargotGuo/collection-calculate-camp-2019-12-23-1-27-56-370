'use strict';
function map_to_even(collection){
  var newArr = collection.map(function (element) {
    return element * 2;
  });
  return newArr;
}
module.exports = map_to_even;
