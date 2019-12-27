'use strict';
function one_add_next_multiply_three(collection){
  var result = collection.map(function(currentValue, currentIndex) {
    return (currentValue + collection[currentIndex + 1]) * 3;
  });
  result.pop();
  return result;
}
module.exports = one_add_next_multiply_three;
