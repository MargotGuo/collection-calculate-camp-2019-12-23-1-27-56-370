'use strict';

function create_updated_collection(collection_a, object_b) {
  
  var outputCollection = collection_a.map(function(currentObj) {
    if (object_b.value.includes(currentObj.key)) {
      var reduction = Math.floor(currentObj.count / 3);
      currentObj.count -= reduction;
    }
    return currentObj;
  });

  return outputCollection;
}

module.exports = create_updated_collection;
