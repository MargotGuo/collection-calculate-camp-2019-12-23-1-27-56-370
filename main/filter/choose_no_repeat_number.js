'use strict';

function choose_no_repeat_number(collection) {
  var newArr = collection.filter(function (item, index) {
    return collection.indexOf(item) === index;
  });
  return newArr;
}
choose_no_repeat_number([1,1,1,2]);
module.exports = choose_no_repeat_number;
