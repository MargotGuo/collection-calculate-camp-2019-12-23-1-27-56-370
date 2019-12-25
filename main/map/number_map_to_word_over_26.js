'use strict';
var number_map_to_word_over_26 = function(collection){
  var charArr = collection.map(function (element) {
    var round = Math.ceil(element / 26) 
    var newElement;
    if (round === 1) {
      newElement = String.fromCharCode(element + 96);
    } else {
      newElement = String.fromCharCode(round + 95) + String.fromCharCode(element - 26 * (round - 1) + 96)
    }
    return newElement;
  });
  return charArr;
};

module.exports = number_map_to_word_over_26;
