'use strict';

function even_to_letter(collection) {

  var evenCollection = collection.filter(function (element) {
    return element % 2 === 0;
  });

  var numberToLetter = evenCollection.map(function (element) {
    return String.fromCharCode(element + 96);
  });
  
  return numberToLetter;
}

module.exports = even_to_letter;
