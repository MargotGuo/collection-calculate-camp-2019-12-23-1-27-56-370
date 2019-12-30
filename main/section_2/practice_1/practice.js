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

module.exports = count_same_elements;
