'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  var newArr = collection_a.filter(function (element) {
    return collection_b.indexOf(element) === -1;
  });
  return newArr;
}

module.exports = choose_no_common_elements;
