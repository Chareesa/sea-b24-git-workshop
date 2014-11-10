'use strict';
var stack = require('./stack.js');

var thisFUNC = function(crazyMath) {
  var s = new stack();

  var mathArray = crazyMath.split('');

  for (var i = 0; i < mathArray.length; i++) {
    if (mathArray[i] === '(') {
      s.push(i);
    }
    if (mathArray[i] === ')') {
      if ((s.dataStore[s.top - 1]) === '(') {
        s.pop();
      } s.push(i);
    }
  }

  if (s.dataStore.length > 0) {
    return s.dataStore;
  }
};

module.exports = thisFUNC;
