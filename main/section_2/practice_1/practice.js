function count_same_elements(collection) {
  var keyArr = collection.filter(getKeyArray);
  var countArr = keyArr.map(getCountSummary);
  return countArr;

  function getCountSummary(element) {
    var tempCount = collection.reduce((accumulator, currentValue) => {
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

module.exports = count_same_elements;
