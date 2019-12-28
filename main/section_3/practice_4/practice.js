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
  var keyArr = formattedArr.filter(getKeyArray);
  var countResult = getCountSummary(keyArr, formattedArr);
  return countResult;
}

function getKeyArray(item, index, collection) {
  return collection.indexOf(item) === index;
}

function getCountSummary(keyArr, collection) {
  var result = keyArr.map(function (element) {
    var elementCount = countElementFrequency(collection, element);
    var countResult = {
      key: element,
      count: elementCount
    };
    return countResult;
  });
  return result;
}

function countElementFrequency(collection, element) {
  var elementArray = getElementArray(collection, element);
  var elementFrequency = elementArray.length;
  return elementFrequency;
}

function getElementArray(collection, element) {
  var elementArray = collection.filter(function (currentValue) {
    return currentValue === element;
  });
  return elementArray;
}

function standardizeArr(collection) {
  var outputCollection = [];
  collection.forEach(function (currentValue) {
    if (currentValue.match(/\d+/)) {
      pushElement(currentValue, outputCollection);
    } else {
      outputCollection.push(currentValue);
    }
  });
  return outputCollection;
}

function pushElement(currentValue, outputCollection) {
  var key = currentValue.charAt(0);
  var value = currentValue.match(/\d+/);
  while (value > 0) {
    outputCollection.push(key);
    value--;
  }
}

module.exports = create_updated_collection;
