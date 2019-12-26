function collect_same_elements(collection_a, collection_b) {
  var elementInB = collection_b.flat(Infinity);
  var elementInCommon = collection_a.filter(function (element) {
    return elementInB.indexOf(element) !== -1;
  });
  return elementInCommon;
}

module.exports = collect_same_elements;
