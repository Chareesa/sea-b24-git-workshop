'use strict';

var NewNode = require('./createDLNode.js');

var DLList = function() {
  this.head = new NewNode('head');
};

DLList.prototype.find = function(item) {
  var currNode = this.head;
  while (currNode.element !== item) {
    currNode = currNode.next;
  }
  return currNode;
};

DLList.prototype.findLast = function() {
  var currNode = this.head;
  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  return currNode;
};

DLList.prototype.insert = function(newElement, item) {
  var newNode = new NewNode(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  newNode.previous = current;
  current.next = newNode;
};

DLList.prototype.findPrevious = function(item) {
  var currNode = this.head;
  while ((currNode.next !== null) &&
    (currNode.next.element !== item)) {
    currNode = currNode.next;
  }
  return currNode;
};

DLList.prototype.display = function() {
  var currNode = this.head;
  var displayStr = '';
  while (currNode.next !== null) {
    displayStr += (currNode.next.element) + ', ';
    currNode = currNode.next;
  }
  return displayStr;

};

DLList.prototype.dispReverse = function() {
  var currNode = this.head;
  currNode = this.findLast();
  while (currNode.previous !== null) {
    console.log(currNode.element);
    currNode = currNode.previous;
  }
};

DLList.prototype.remove = function(item) {
  var currNode = this.find(item);
  if (currNode.next !== null) {
    currNode.previous.next = currNode.next;
    currNode.next.previous = currNode.previous;
    currNode.next = null;
    currNode.previous = null;
  }
};

DLList.prototype.backtoHead = function(n, item) {
  if (n === 0) {
    throw ('You haven\'t moved anywhere');
  }
  var currNode = this.find(item);
  var temp = currNode;
  for (var i = 0; i < n; i++) {
    if (currNode.previous.element === 'head') {  //not catching the null!!
      throw ('You are trying to move too far');
    }
    currNode = currNode.previous;
  }
  this.remove(item);
  temp.next = currNode.next;
  temp.previous = currNode;
  currNode.next = temp;
};

DLList.prototype.show = function(item) {
  var currNode = this.head;
  var counter = 0;
  while (currNode.element !== item) {
    currNode = currNode.next;
    counter++;
  }
  return (item + ' is number ' + counter + ' in line.');
};

module.exports = DLList;
