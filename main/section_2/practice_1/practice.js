function count_same_elements(collection) {
  var keyArr = collection.filter(getKeyArray);
  var countResult = getCountSummary(keyArr, collection);
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

module.exports = count_same_elements;
