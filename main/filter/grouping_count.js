'use strict';

function grouping_count(collection) {
  var newObj = {};
  collection.forEach(function (element) {
    if (newObj[element]) {
      newObj[element]++;
    } else {
      newObj[element] = 1;
    }
  });
  return newObj;
}

module.exports = grouping_count;
