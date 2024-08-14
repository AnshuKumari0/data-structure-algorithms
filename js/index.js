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

// var a = 21;
// console.log(reverseNumber(a));

/* Check palidrome */

function checkPlaidrome(str) {
  var reversed = str.split("").reverse().join("");
  console.log(reversed);

  if (reversed === str) return true;
  else return false;
}

// console.log(checkPlaidrome("lool"));

/* Write a javascript function that returns a passed string with letters in albhabetical order like anshu = ahnsu  */
function strAlpha(str) {
  return str.split("").sort().join("");
}

// console.log(strAlpha("anshu"));

/*Write a javascript function that accepts a string as a parameter and
converts the first letter of each word of the string in upper case */

function firstUppercase(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}
// console.log(firstUppercase("anshu"));

/* Write a javascript function to get the number of occurences of each letter in specified string */
function occurences(str) {
  let occurences = {};
  str.split("").forEach((item) => {
    if (occurences.hasOwnProperty(item) === false) {
      occurences[item] = 1;
    } else {
      occurences[item]++;
    }
  });
  return occurences;
}

// console.log(occurences("aashu"));

/* Loop an array and add all member of it */
function funcSum(arr) {
  let sum = 0;
  arr.forEach((item) => {
    sum = sum + item;
  });
  return sum;
}

// var arr = [1, 2, 3, 4];
// console.log(funcSum(arr));

/** In an array of numbers and strings, only add those members which are not strings */
// let arrNum = [2, "anshu", 4, "ram"];

function funcNumberSum(elem) {
  let num = 0;
  elem.forEach((word) => {
    if (typeof word === "number") {
      num = num + word;
    }
  });

  return num;
}

// console.log(funcNumberSum(arrNum));

/* Loop an array of objects an remove all object which don't have gender's value male  */
let arrayOfObjects = [
  { name: "John", gender: "male" },
  { name: "Jane", gender: "female" },
  { name: "Alex", gender: "male" },
  { name: "Emily", gender: "female" },
];

let findMale = arrayOfObjects.filter((item) => {
  return item.gender === "male";
});

// console.log(findMale);

/* Write a javascript function to clone a array */
function funcCloneArray(arr) {
  return [...arr];
}

//another way
function funcCloneArray1(arr) {
  let newArr = [];
  arr.forEach((e) => {
    newArr.push(e);
  });
  return newArr;
}

var newArray = new funcCloneArray([1, 2, 3, 4, 5]);
let arr2 = [1, 2, 3, 4, 5];
var newArray2 = funcCloneArray1(arr2);
// console.log(newArray2);

/* Write a javascript function which accepts an argument
and returns the type Note: There are six possible values that typeof returns:object, boolean, function,number,
string and undefined */

function typeCheck(arg) {
  return typeof arg;
}
// console.log(typeCheck([]));
// console.log(typeCheck(undefined));
// console.log(typeCheck(12));
// console.log(typeCheck(false));
// console.log(typeCheck("ram"));
// console.log(typeCheck(function () {}));

/* Write a javascript function to get the number
of occurrences of each letter in specified string */
function letterFrequency(str) {
  const frequency = {};

  // Convert the string to lowercase to ensure case insensitivity
  str = str.toLowerCase();

  // Iterate over each character in the string
  for (const char of str) {
    // Check if the character is a letter
    if (char >= "a" && char <= "z") {
      // Initialize or update the frequency count for the character
      if (frequency[char]) {
        frequency[char]++;
      } else {
        frequency[char] = 1;
      }
    }
  }

  return frequency;
}
// Example usage
const inputString = "Hello World!";
const result1 = letterFrequency(inputString);
console.log(result1);

/*Write a javascript function to get the first element 
of an array. Passing a parameter 'n' will return the first 'n'
elements of the array. */

function getFirstElem(arr, n = 0) {
  return arr.slice(0, n);
}
// console.log(getFirstElem(["ram", 1, "karan"], 1));

/* Write a Javascript function to get the last element of an array.
Passing aparameter 'n' will return the last 'n' elements of an array. */
function getLastElements(array, n = 1) {
  return array.slice(-n);
}

// console.log(getLastElements([1, 2, 3, 4])); // [4]
// console.log(getLastElements([1, 2, 3, 4], 2)); // [3, 4]
// console.log(getLastElements([1, 2, 3, 4], 5)); // [1, 2, 3, 4]

/* Write a Javascript program to find the most frequent item of an array */
function freq(arr) {
  var freqMap = {}; // Use a more descriptive variable name
  arr.forEach(function (elem) {
    if (freqMap.hasOwnProperty(elem)) {
      freqMap[elem]++; // Increment the count for existing elements
    } else {
      freqMap[elem] = 1; // Initialize count for new elements
    }
  });

  // Find the item with the highest frequency
  var mostFrequent = Object.keys(freqMap).reduce(function (prev, next) {
    return freqMap[prev] > freqMap[next] ? prev : next;
  });

  return mostFrequent;
}

// console.log(freq([1, 2, 3, 13, 24, 34, 23, 56, 13])); // 13

/* Write a javascript program to suffle an array */

/* Write a javascript program to compute the union of two arrays
Sample Data :
console.log(union(1,2,3], [100,2,1,10])) 
[1,2,3,10,100]
*/
