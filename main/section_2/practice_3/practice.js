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
      name: element,
      summary: elementCount
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

module.exports = count_same_elements;
