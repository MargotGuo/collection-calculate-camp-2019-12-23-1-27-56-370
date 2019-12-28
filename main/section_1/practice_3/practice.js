'use strict';

function collect_same_elements(collection_a, object_b) {

  var elementInB = object_b.value;

  var elementInCommon = collection_a.filter(function (currentValue) {
    return elementInB.includes(currentValue);
  });

  return elementInCommon;
}

module.exports = collect_same_elements;
