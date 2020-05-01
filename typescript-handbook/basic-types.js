"use strict";
exports.__esModule = true;
// Boolean
var isUser = true;
var isTrue = !!'boolean';
var isUnderfined = undefined; // no error
var isNull = null; // no error
// Null and Underfined
var nothing = null;
var undef = undefined;
var num; // union type
num = null;
num = 5;
num = undefined;
// Number
var decimal = 25;
var hex = 0xa;
var binary = parseInt(decimal.toString(2));
var oct = 484;
console.log(binary, hex);
// String 
var sentence = "Hello, Guys! I'm " + 25 + " years old";
// Array
var arr = [1, 2, 3, 4];
var arrr = ['Dan', 'Ben']; //generic type
var x;
x = ['Hello', 6];
console.log(x);
//Enum 
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 5] = "Up";
    Directions[Directions["Right"] = 6] = "Right";
    Directions[Directions["Left"] = 7] = "Left";
    Directions[Directions["Down"] = 8] = "Down";
})(Directions || (Directions = {}));
var up = Directions.Up;
var right = Directions.Right;
var left = Directions[6]; // reverse Enum
var down = Directions.Down;
console.log(up, left, right, down);
var Links;
(function (Links) {
    Links["google"] = "https://google.com";
    Links["youtube"] = "https://youtube.com";
})(Links || (Links = {}));
console.log(Links.google);
// Any
var notSure = 'what?';
notSure = true;
var list = [1, true, "free"];
list[5] = { name: 'Johny' };
console.log(list);
// Void
function warnUser() {
    console.log("This is my warning message");
}
// Never
var neverReturn = function () {
    throw new Error('never');
};
var neverEnds = function () {
    while (true) {
    }
};
// create({ prop: 0 });
// create(4);
// Assertions
var str2 = '2';
str2.length;
console.log(str2.length);
var f1;
f1 = function () {
    return undefined;
};
console.log(f1());
