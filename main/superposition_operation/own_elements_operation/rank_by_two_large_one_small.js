'use strict';
function rank_by_two_large_one_small(collection){
  var sortCollection = collection.sort(function (a, b) {
    return a - b;
  });

  var result = sortCollection.map(function(currentValue, currentIndex) {
    if (sortCollection[currentIndex + 2]) {
      if (currentIndex % 3 !== 2) {
        return sortCollection[currentIndex + 1];
      } else {
        return sortCollection[currentIndex - 2];
      }
    } else {
      return currentValue;
    }
  });
  
  return result;
}
module.exports = rank_by_two_large_one_small;
