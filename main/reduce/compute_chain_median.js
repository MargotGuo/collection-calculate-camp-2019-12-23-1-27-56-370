'use strict';

function compute_chain_median(collection) {
  var splitArr = collection.split('->');
  var sortArr = splitArr.sort( function (a, b) {
    return a - b;
  });

  var len = sortArr.length;
  var result;
  if (len % 2) {
    result = sortArr[Math.ceil(len / 2) - 1];
  } else {
    result = 0.5 * sortArr[len / 2 - 1] + 0.5 * sortArr[len / 2];
  }
  return Number(result);
}

module.exports = compute_chain_median;
