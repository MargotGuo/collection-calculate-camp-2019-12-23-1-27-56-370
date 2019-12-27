'use strict';
var even_asc_odd_desc = function(collection){
  var evenNumber = collection.filter(function (element) {
    return element % 2 === 0;
  });
  var oddNumber = collection.filter(function (element) {
    return element % 2 === 1;
  });
  var sortEvenNumber = evenNumber.sort(function (a, b) {
    return a - b;
  });
  var sortOddNumber = oddNumber.sort(function(a, b) {
    return b - a;
  });
  var result = sortEvenNumber.concat(sortOddNumber);
  return result;
};
module.exports = even_asc_odd_desc;
