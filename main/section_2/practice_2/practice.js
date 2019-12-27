function count_same_elements(collection) {
  var formattedArr = standardizeArr(collection);
  var keyArr = formattedArr.filter(getKeyArray);
  var countArr = keyArr.map(getCountSummary);
  return countArr;

  function getCountSummary(element) {
    var tempCount = formattedArr.reduce((accumulator, currentValue) => {
      if (currentValue === element) {
        accumulator++;
        return accumulator;
      }
      return accumulator;
    }, 0);

    var tempObj = {
      key: element,
      count: tempCount
    }
    return tempObj;
  }
}

function getKeyArray(item, index, collection) {
  return collection.indexOf(item) === index;
}

function standardizeArr(collection) {
  var outputCollection = [];
  for (var index = 0, len = collection.length; index < len; index++) {
    if (collection[index].indexOf('-') === -1) {
      outputCollection.push(collection[index]);
    } else {
      var key = collection[index].split('-')[0];
      var value = collection[index].split('-')[1];
      while (value > 0) {
        outputCollection.push(key);
        value--;
      }
    }
  }
  return outputCollection;
}

module.exports = count_same_elements;
