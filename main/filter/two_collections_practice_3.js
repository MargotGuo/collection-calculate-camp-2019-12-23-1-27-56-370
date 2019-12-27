'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  var divisibleInteger = collection_a.filter(function (dividendNumber) {
    var divisionResult = collection_b.filter(function (divider) {
      return dividendNumber % divider === 0;
    });
    return divisionResult.length;
  });
  return divisibleInteger;
}

module.exports = choose_divisible_integer;
