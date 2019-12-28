'use strict';

function compare_collections(collection_a, collection_b) {

  if (collection_a.length !== collection_b.length) {
    return false;
  }

  var result = collection_a.reduce(function (tempValue, currentValue, currentIndex) {
    return tempValue && (currentValue === collection_b[currentIndex]);
  }, true);

  return result;
}

module.exports = compare_collections;


