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

module.exports = count_same_elements;
