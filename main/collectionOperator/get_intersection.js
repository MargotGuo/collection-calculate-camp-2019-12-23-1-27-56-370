'use strict';

function get_intersection(collection_a, collection_b) {
  var interSection = collection_b.filter(function (element) {
    return collection_a.indexOf(element) !== -1;
  });
  return interSection;
}

module.exports = get_intersection;
