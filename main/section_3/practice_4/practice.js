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
    if (collection[index].match(/\d+/)) {
      var key = collection[index].charAt(0);
      var value = collection[index].match(/\d+/);
      while (value > 0) {
        outputCollection.push(key);
        value--;
      }
    } else {
      outputCollection.push(collection[index]);
    }
  }
  return outputCollection;
}
module.exports = create_updated_collection;
