'use strict';

var expect = require('chai').expect;
var stacktest = require('../lib/stackFunction.js');
var gradetest = require('../lib/gradingFunction.js');
var LList = require('../lib/SLList.js');
var DLList = require('../lib/DLList.js');
var pezSifter = require('../lib/stackOfPez.js');
var arithmetic = require('../lib/stackArithmetic');

//stack tests
describe('Find Unmatched Parenthesis', function() {
  it('returns the index of the unmatched parenthesis', function() {
    expect(stacktest('3 + 4) * 5')).to.eql([5]);
  });
});

describe('Dispose of yellow pez', function() {
  it('returns array without any yellow', function() {
    expect(pezSifter(10)).to.not.include('Yellow');
  });
});

describe('Convert arithmetic expression from infix to postfix', function() {
  it('separates operators from operands', function() {
    expect(arithmetic('4+3-8/7=0')).to.eql('07834=/-+');
  });
});

//llist tests
describe('Use ADVANCE function on Single Linked List', function() {
  var children = new LList();
  children.insert('Joel', 'head');
  children.insert('Charla', 'Joel');
  children.insert('Chareesa', 'Charla');
  children.insert('Justin', 'Chareesa');
  children.insert('Bailey', 'Justin');
  children.advancetoTail(2, 'Chareesa');

  it('returns list of names after using advance function', function() {
    expect(children.display()).to.eql('Joel, Charla, Justin, Bailey, Chareesa, ');
  });

  it('SHOW function returns the selected node\'s place in line', function() {
    expect(children.show('Bailey')).to.eql('Bailey is number 4 in line.');
  });
});

describe('Use BACK function on Double Linked List', function() {
  var rainbowColor = new DLList();
  rainbowColor.insert('Red', 'head');
  rainbowColor.insert('Orange', 'Red');
  rainbowColor.insert('Yellow', 'Orange');
  rainbowColor.insert('Green', 'Yellow');
  rainbowColor.insert('Blue', 'Green');
  rainbowColor.insert('Purple', 'Blue');
  rainbowColor.backtoHead(3, 'Green');

  it('returns list of names after using advance function', function() {
    expect(rainbowColor.display()).to.eql('Red, Green, Orange, Yellow, Blue, Purple, ');
  });

  it('SHOW function returns the selected node\'s place in line', function() {
    expect(rainbowColor.show('Yellow')).to.eql('Yellow is number 4 in line.');
  });
});

describe('Run Grade Tracker', function() {
  it('returns names matched with grades', function() {
    expect(gradetest('Karl', 'A+', 'Stephanie', 'A+', 'Chareesa', 'A+')).to.eql('Karl:(A+) Stephanie:(A+) Chareesa:(A+) ');
  });
});
