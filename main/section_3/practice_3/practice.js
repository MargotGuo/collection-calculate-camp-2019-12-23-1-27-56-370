'use strict';

function create_updated_collection(collection_a, object_b) {
  var collection_c = count_same_elements(collection_a);

  var outputCollection = collection_c.map(function(currentObj) {
    if (object_b.value.includes(currentObj.key)) {
      var reduction = Math.floor(currentObj.count / 3);
      currentObj.count -= reduction;
    }
    return currentObj;
  });

  return outputCollection;
}

function count_same_elements(collection) {
  var countObj = {};

  for (var i = 0, len = collection.length; i < len; i++) {
    if (countObj[collection[i]]) {
      countObj[collection[i]]++;
    } else {
      countObj[collection[i]] = 1;
    }
  }

  var result = [];
  for (var key in countObj) {
    var tempObj = {
      key: key,
      count: countObj[key]
    };
    result.push(tempObj);
  }

  return result;
}

module.exports = create_updated_collection;
