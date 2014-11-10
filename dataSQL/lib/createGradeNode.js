'use strict';

var NewStudentNode = function(element, grade) {
  this.element = element;
  this.grade = grade;
  this.next = null;
};

module.exports = NewStudentNode;
