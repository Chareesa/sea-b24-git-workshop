'use strict';

var NewNode = function(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
};

module.exports = NewNode;
