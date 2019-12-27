'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  var uniqueElement = collection_a.filter(function (element) {
    return !collection_b.includes(element);
  });
  return uniqueElement;
}

module.exports = choose_no_common_elements;
