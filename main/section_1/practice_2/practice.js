'use strict';

function collect_same_elements(collection_a, collection_b) {

  var elementInB = flatArray(collection_b);

  var elementInCommon = collection_a.filter(function (currentValue) {
    return elementInB.includes(currentValue);
  });

  return elementInCommon;
}

function flatArray(collection) {
  var result = [];
  if (collection instanceof Array) {
    collection.forEach(function (element) {
      result = result.concat(flatArray(element));
    });
  } else {
    result.push(collection);
  }
  return result;
}

module.exports = collect_same_elements;
