'use strict';

function compute_median(collection) {

  var sortArray = collection.sort( function (a, b) {
    return a - b;
  });

  var len = sortArray.length;
  var median;
  if (len % 2) {
    median = sortArray[(len - 1 ) / 2];
  } else {
    median = 0.5 * sortArray[len / 2 - 1] + 0.5 * sortArray[len / 2];
  }
  
  return median;
}

module.exports = compute_median;


