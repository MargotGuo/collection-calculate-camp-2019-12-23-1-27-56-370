'use strict';

function create_updated_collection(collection_a, object_b) {
  var collection_c = count_same_elements(collection_a);

  var outputCollection = collection_c.map(function(currentObj) {
    if (object_b.value.indexOf(currentObj.key) !== -1) {
      var reduction = Math.floor(currentObj.count / 3);
      currentObj.count -= reduction;
    }
    return currentObj;
  });

  return outputCollection;
}

function count_same_elements(collection) {
  var formattedArr = standardizeArr(collection);

  var countObj = {};

  for (var i = 0, len = formattedArr.length; i < len; i++) {
    if (countObj[formattedArr[i]]) {
      countObj[formattedArr[i]]++;
    } else {
      countObj[formattedArr[i]] = 1;
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

function standardizeArr(collection) {
  var outputCollection = [];
  collection.forEach(function (currentValue) {
    if (currentValue.match(/\d+/)) {
      var key = currentValue.charAt(0);
      var value = currentValue.match(/\d+/);
      while (value > 0) {
        outputCollection.push(key);
        value--;
      }
    } else {
      outputCollection.push(currentValue);
    }
  });
  return outputCollection;
}
module.exports = create_updated_collection;
