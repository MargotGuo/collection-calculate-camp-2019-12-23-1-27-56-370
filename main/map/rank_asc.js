'use strict';

var rank_asc = function(collection){
  var sortedCollection = collection.sort(function(a, b) {
    return b - a;
  });
  return sortedCollection;
};


module.exports = rank_asc;
