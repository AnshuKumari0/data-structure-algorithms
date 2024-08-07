/* 1. Given a string , reverse each word in the sentence */

let str = "Hello, this is anshu kumari";

let result = str.split(" ").map((word) => {
  // console.log(word);
  return word.split("").reverse().join("");
});
// console.log(result.join(" "));

/* How to check if object an is array or not */
function checkArray(elem) {
  return Array.isArray(elem);
}

// console.log(checkArray([]));
// console.log(checkArray({}));

/* How to empty array in javascript */
arr = [1, 2, 3, 4, 5];
arr.length = 0;

/* How to check a number is an integer */
var a = 10;
if (a % 2 === 0) {
  console.log("integer");
} else {
  console.log("not i");
}

/** Make a array duplicate */
function arrayDuplicate(a) {
  return a.concat(a);
}
// var a = [1, 2, 3];
// console.log(arrayDuplicate(a));

/** Write a javascript function reverse an number */
function reverseNumber(a) {
  return Number(a.toString().split("").reverse().join(""));
}

// Another way
function reverseNumber(num) {
  var rev = 0;
  while (num > 0) {
    var rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
}

var a = 21;
console.log(reverseNumber(a));
