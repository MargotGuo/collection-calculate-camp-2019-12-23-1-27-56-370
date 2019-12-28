'use strict';

function collect_same_elements(collection_a, object_b) {

  var elementInA = collection_a.map(function (object) {
    return object.key;
  });

  var elementInB = object_b.value;

  var elementInCommon = elementInA.filter(function (currentValue) {
    return elementInB.includes(currentValue);
  });

  return elementInCommon;
}

module.exports = collect_same_elements;
