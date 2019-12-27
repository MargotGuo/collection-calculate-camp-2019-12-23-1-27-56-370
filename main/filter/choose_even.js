'use strict';

function choose_even(collection) {
  var evenNumber = collection.filter(isEvenNumber);
  return evenNumber;
}

function isEvenNumber(number) {
  return number % 2 === 0;
}

module.exports = choose_even;
