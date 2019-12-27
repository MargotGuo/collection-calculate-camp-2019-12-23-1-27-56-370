'use strict';

function get_union(collection_a, collection_b) {
  var differentElement = findDifferent(collection_a, collection_b);
  var union = collection_a.concat(differentElement)
  return union;
}

function findDifferent(collection_a, collection_b) {
  return collection_b.filter(function (number) {
    return !collection_a.includes(number);
  });
}

module.exports = get_union;

