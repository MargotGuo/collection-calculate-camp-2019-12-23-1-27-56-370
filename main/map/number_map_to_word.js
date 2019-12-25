'use strict';
var number_map_to_word = function(collection){
  var charArr = collection.map(function (element) {
    var element = String.fromCharCode(element + 96);
    return element;
  });

  return charArr;
};

module.exports = number_map_to_word;
