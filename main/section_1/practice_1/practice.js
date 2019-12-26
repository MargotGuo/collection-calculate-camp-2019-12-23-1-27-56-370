function collect_same_elements(collection_a, collection_b) {
  var elementInCommon = collection_a.filter(function (element) {
    return collection_b.indexOf(element) !== -1;
  });
  return elementInCommon;
}

module.exports = collect_same_elements;
