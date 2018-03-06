"use strict";

//Zadanie pierwsze

var first = "Hello";
var second = "World!";
var helloWorld = first + " " + second;
console.log(helloWorld);

//Zadanie drugie

var multiply = function multiply(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};

multiply(2, 5);
multiply(100);

//Zadanie trzecie

var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var sum = 0;
  args.forEach(function (args) {
    sum = sum + args;
  });
  return sum / args.length;
};

average(20, 40, 30, 50);

//Zadanie czwarte

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

average.apply(undefined, grades);

//Zadanie piąte

var table = [1, 4, 'Iwona', false, 'Nowak'];

var firstName = table[2],
    secondName = table[4];
