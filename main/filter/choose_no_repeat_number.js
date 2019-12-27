'use strict';

function choose_no_repeat_number(collection) {
  var noRepeatNumber = collection.filter(isNoRepeatNumber);
  return noRepeatNumber;
}

function isNoRepeatNumber(item, index, collection) {
  return collection.indexOf(item) === index;
}

module.exports = choose_no_repeat_number;
