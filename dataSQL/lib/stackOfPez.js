'use strict';

var Stack = require('./stack.js');

var pezSifter = function(numOfPez) {
  var dispenser = new Stack();
  var tempContainer = new Stack();

  var colors = ['Red', 'Yellow', 'White'];

  for (var j = 0; j < numOfPez; j++) {
    var randomPick = colors[Math.floor(colors.length * Math.random())];
    dispenser.push(randomPick);
  }

  while (dispenser.top > 0) {
    var pez = dispenser.pop();
    if (pez !== 'Yellow') {
      tempContainer.push(pez);
    }
  }

  dispenser.clear();

  while (tempContainer.top > 0) {
    var pez = tempContainer.pop();
    dispenser.push(pez);
  }

  tempContainer.clear();

  return dispenser.dataStore;

};

module.exports = pezSifter;
