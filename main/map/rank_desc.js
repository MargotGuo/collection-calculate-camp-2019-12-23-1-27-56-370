'use strict';

var rank_desc = function(collection){
  var sortedCollection = collection.sort(function(a, b) {
    return a - b;
  });
  return sortedCollection;
};

module.exports = rank_desc;
