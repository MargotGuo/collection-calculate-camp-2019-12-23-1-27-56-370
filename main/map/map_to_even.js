'use strict';

function map_to_even(collection){
  var doubleNumber = collection.map(double);
  return doubleNumber;
}

function double(currentValue) {
  return currentValue * 2;
}

module.exports = map_to_even;
