'use strict';

function choose_even(collection) {
  var newArr = collection.filter(isEven);
  return newArr;
}

function isEven(element) {
  return element % 2 === 0;
}
module.exports = choose_even;
