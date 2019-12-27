'use strict';

var map_to_three_multiples = function(collections){
  var result = collections.map(operate);
  return result;
};

function operate(currentValue) {
  return currentValue * 3;
}

module.exports = map_to_three_multiples;
