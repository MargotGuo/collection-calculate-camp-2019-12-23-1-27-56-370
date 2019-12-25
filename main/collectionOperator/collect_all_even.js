'use strict';

function collect_all_even(collection) {
  var evenCollection = collection.filter(isEvenNumber);
  return evenCollection;
}

function isEvenNumber(number) {
  return number % 2 === 0;
}

module.exports = collect_all_even;
