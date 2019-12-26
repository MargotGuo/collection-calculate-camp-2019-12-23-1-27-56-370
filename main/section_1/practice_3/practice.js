function collect_same_elements(collection_a, object_b) {
  var elementInB = object_b.value;
  var elementInCommon = collection_a.filter(function (element) {
    return elementInB.indexOf(element) !== -1;
  });
  return elementInCommon;
}

module.exports = collect_same_elements;
