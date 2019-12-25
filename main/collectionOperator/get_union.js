'use strict';

function get_union(collection_a, collection_b) {
  var union = collection_a;
  collection_b.forEach(function (element) {
    if (union.indexOf(element) === -1) {
      union.push(element);
    }
  });
  return union;
}

module.exports = get_union;

