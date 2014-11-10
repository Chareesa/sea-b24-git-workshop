'use strict';

var LList = require('./gradeSLList.js');
var NewStudentNode = require('./createGradeNode.js');

LList.prototype.addStudent = function(newElement, item, grade) {
  var newstudent = new NewStudentNode(newElement, grade);
  var current = this.find(item);
  newstudent.next = current.next;
  current.next = newstudent;
};

LList.prototype.displayAllGrades = function() {
  var currNode = this.head;
  var msg = '';
  while (currNode.next !== null) {
    msg += currNode.next.element + ':(' + currNode.next.grade + ') ';
    currNode = currNode.next;
  }
  return msg;
};

function gradeList(s1, g1, s2, g2, s3, g3) {
  var test = new LList();
  test.addStudent(s1, 'head', g1);
  test.addStudent(s2, s1, g2);
  test.addStudent(s3, s2, g3);
  return (test.displayAllGrades());
}

// console.log(gradeList('Karl', 'A+', 'Stephanie', 'A+', 'Chareesa', 'A+'));

module.exports = gradeList;
