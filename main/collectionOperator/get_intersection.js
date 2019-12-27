'use strict';

function get_intersection(collection_a, collection_b) {
  var interSection = collection_b.filter(function (currentValue) {
    return collection_a.includes(currentValue);
  });
  return interSection;
}

module.exports = get_intersection;
