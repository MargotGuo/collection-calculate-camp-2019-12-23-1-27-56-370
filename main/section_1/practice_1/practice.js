'use strict';

function collect_same_elements(collection_a, collection_b) {

  var elementInCommon = collection_a.filter(function (currentValue) {
    return collection_b.includes(currentValue);
  });

  return elementInCommon;
}

module.exports = collect_same_elements;
