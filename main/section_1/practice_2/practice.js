'use strict';

function collect_same_elements(collection_a, collection_b) {

  var elementInB = collection_b.flat(Infinity);

  var elementInCommon = collection_a.filter(function (currentValue) {
    return elementInB.includes(currentValue);
  });

  return elementInCommon;
}

module.exports = collect_same_elements;
