'use strict';

function grouping_count(collection) {
  var countResult = {};
  collection.forEach(function (element) {
    if (countResult[element]) {
      countResult[element]++;
    } else {
      countResult[element] = 1;
    }
  });
  return countResult;
}

module.exports = grouping_count;
