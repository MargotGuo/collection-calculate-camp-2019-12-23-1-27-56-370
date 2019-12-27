'use strict';

var map_to_four_multiples_add_one = function(collection){
  var result = collection.map(operate);
  return result;
};

function operate(currentValue) {
  return currentValue * 4 + 1;
}

module.exports = map_to_four_multiples_add_one;
