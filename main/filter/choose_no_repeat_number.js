'use strict';

function choose_no_repeat_number(collection) {
  var newArr = [];
  collection.forEach(function (element) {
    if (newArr.indexOf(element) === -1) {
      newArr.push(element);
    }
  });
  return newArr;
}
choose_no_repeat_number([1,1,1,2]);
module.exports = choose_no_repeat_number;
