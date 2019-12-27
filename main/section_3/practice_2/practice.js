function create_updated_collection(collection_a, object_b) {
  var outputCollection = collection_a.map(function(tempObj) {
    if (object_b.value.indexOf(tempObj.key) !== -1) {
      var reduction = Math.floor(tempObj.count / 3);
      tempObj.count -= reduction;
    }
    return tempObj;
  });
  return outputCollection;
}

module.exports = create_updated_collection;
