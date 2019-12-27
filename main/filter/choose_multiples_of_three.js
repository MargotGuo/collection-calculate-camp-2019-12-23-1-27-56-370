'use strict';

function choose_multiples_of_three(collection) {
  var multipleOfThree = collection.filter(isMultipleOfThree);
  return multipleOfThree;
}

function isMultipleOfThree(number) {
  return number % 3 === 0;
}

module.exports = choose_multiples_of_three;
