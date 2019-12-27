'use strict';

function choose_common_elements(collection_a, collection_b) {
  var commonElement = collection_a.filter(function (element) {
    return collection_b.includes(element);
  });
  return commonElement;
}

module.exports = choose_common_elements;
