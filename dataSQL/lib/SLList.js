'use strict';

var NewNode = require('./createSLNode.js');

var LList = function() {
  this.head = new NewNode('head');
};

LList.prototype.find = function(item) {
  var currNode = this.head;
  while (currNode.element !== item) {
    currNode = currNode.next;
  }
  return currNode;
};

LList.prototype.insert = function(newElement, item) {
  var newNode = new NewNode(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
};

LList.prototype.findPrevious = function(item) {
  var currNode = this.head;
  while ((currNode.next !== null) &&
    (currNode.next.element !== item)) {
    currNode = currNode.next;
  }
  return currNode;
};

LList.prototype.display = function() {
  var currNode = this.head;
  var displayStr = '';
  while (currNode.next !== null) {
    displayStr += (currNode.next.element) + ', ';
    currNode = currNode.next;
  }
  return displayStr;

};
LList.prototype.remove = function(item) {
  var prevNode = this.findPrevious(item);
  if (prevNode.next !== null) {
    prevNode.next = prevNode.next.next;
  }
};

LList.prototype.advancetoTail = function(n, item) {
  if (n === 0) {
    throw ('You haven\'t moved anywhere');
  }
  var currNode = this.find(item);
  var temp = currNode;
  for (var i = 0; i < n; i++) {
    if (currNode.next === null) {
      throw ('You are trying to move too far');
    }
    currNode = currNode.next;
  }
  this.remove(item);
  temp.next = currNode.next;
  currNode.next = temp;
};

LList.prototype.show = function(item) {
  var currNode = this.head;
  var counter = 0;
  while (currNode.element !== item) {
    currNode = currNode.next;
    counter++;
  }
  return (item + ' is number ' + counter + ' in line.');
};

var children = new LList();
children.insert('Joel', 'head');
children.insert('Charla', 'Joel');
children.insert('Chareesa', 'Charla');
children.insert('Justin', 'Chareesa');
children.insert('Bailey', 'Justin');
children.advancetoTail(2, 'Chareesa');

module.exports = LList;
