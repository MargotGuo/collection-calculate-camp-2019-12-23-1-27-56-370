'use strict';

function choose_multiples_of_three(collection) {
  var newArr = collection.filter(isMultipleOfThree);
  return newArr;
}

function isMultipleOfThree(element) {
  return element % 3 === 0;
}

module.exports = choose_multiples_of_three;
