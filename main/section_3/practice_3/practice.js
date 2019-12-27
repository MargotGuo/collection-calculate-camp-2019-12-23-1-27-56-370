function create_updated_collection(collection_a, object_b) {
  var collection_c = count_same_elements(collection_a);

  var outputCollection = collection_c.map(function(tempObj) {
    if (object_b.value.indexOf(tempObj.key) !== -1) {
      var reduction = Math.floor(tempObj.count / 3);
      tempObj.count -= reduction;
    }
    return tempObj;
  });
  return outputCollection;
}

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
module.exports = create_updated_collection;
