function trampoline(fn) {
  return function trampolined(...args) {
    let result = fn(...args);

    while (typeof result === "function") {
      result = result();
    }

    return result;
  };
}

const isPalindrome = (stringArray, isMatch = true) => {
  if (!isMatch) return false;
  if (stringArray.length === 0 || stringArray.length === 1) return true;
  const match = stringArray.shift() === stringArray.pop();
  return isPalindrome(stringArray, match);
};

const resultOne = isPalindrome("fiwjfoi".split(""));
console.log(resultOne);

const joinElementsArray = ["s", "cr", "t cod", " :) :)"];

function joinElements(array, joinString) {
  let result = "";

  for (let i = 0; i < array.length - 1; i++) {
    result += array[i] + joinString;
  }

  return result + array[array.length - 1];
}

console.log(joinElements(joinElementsArray, "e"));

function factorial(num) {
  if (num === 1) return num;
  return num * factorial(num - 1);
}

function memoize(fn) {
  const cache = {};
  return function(n) {
    if (n in cache) return cache[n];
    else {
      const result = fn(n);
      cache[n] = result;
      return result;
    }
  };
}

const memoFactorial = memoize(factorial);
console.log(memoFactorial(5));

// POWER. Accepts base and exponent. returns power of the base of the exponent

// RECURSION WITH WRAPPER
function power(base, exponent) {
  let result = base;
  function calc(base, exponent) {
    result = result * base;
    if (exponent === 1) return base;
    return calc(base, exponent - 1);
  }

  calc(base, exponent);
  return result;
}

console.log(power(2, 3));

// TAIL CALL RECURSION
function calcPower(base, exponent, result = base) {
  if (exponent === 1) return result;
  result = result * base;
  return function() {
    return calcPower(base, exponent - 1, result);
  };
}

// TRAMPOLINED VERSION

const getPower = trampoline(calcPower);

console.log("calced power: ", getPower(3, 5));

// Produt of ARRAY. Multiplies all the elements of the array together.

//** REGULAR RECURSION **//
const productArray = [1, 2, 3, 4, 10];

function productOfArray(array, count = array.length - 1) {
  if (count === 0) return array[count];
  return array[count] * productOfArray(array, count - 1);
}

// ** TAIL CALL VERSION **//

function productOfArrayTailCall(array, count = array.length - 1, result = 1) {
  result = result * array[count];
  if (count === 0) return result;
  return function() {
    return productOfArrayTailCall(array, count - 1, result);
  };
}
// ** TRAMPOLINE VERSION ** //

const trampolineResult = trampoline(productOfArrayTailCall);

console.log(trampolineResult(productArray));

// console.log("product Array: ", productOfArrayTailCall(productArray));

// NEW EXERCISE
//** Write a function called recursiveRange which accepts a number and adds up all the numberrs from 0 to the number passed to the function **//

function recursiveRange(number, result = 0) {
  result = result + number;

  if (number === 0) return result;
  return recursiveRange(number - 1, result);
}

// NEW EXERCISE

// ** Write a function called reverse which accepts a string and returns a new string in reverse.

function reverse(originalString = originalString.split, newString = "") {
  if (originalString.length === 0) return newString;
  newString = `${newString}${originalString.pop()}`.trim();
  return reverse(originalString, newString);
}

console.log(reverse("fun".split("")));

// NEW EXERCISE

// ** Write recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

const isOdd = val => val % 2 !== 0;

function someRecursive(array, cb, index = array.length - 1, result = false) {
  result = cb(array[index]);
  if (result) return true;
  else if (index === 0) return false;
  return someRecursive(array, cb, index - 1, result);
}

console.log(someRecursive([2, 4, 7], isOdd));

// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

function flatten(array, index = 0, newArray = []) {
  if (typeof array[index] === "number") {
    newArray.push(array[index]);
  }

  if (typeof array[index] === "object" && Array.isArray(array[index])) {
    array[index].forEach(num => newArray.push(num));
  }

  if (index >= array.length - 1) return newArray;
  return flatten(array, index + 1, newArray);
}

const array = [1, 2, 3, [4, 5]];

console.log(flatten(array));

// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string
// in the array

function capitalizeFirst(array, index = 0, newStrArray = []) {
  const capitalizedWord =
    array[index].charAt(0).toUpperCase() + array[index].slice(1);
  newStrArray.push(capitalizedWord);
  if (index >= array.length - 1) return newStrArray;

  return capitalizeFirst(array, index + 1, newStrArray);
}

const capitalizeArray = ["cat", "taco", "banana"];

console.log(capitalizeFirst(capitalizeArray));

//nestedEvenSum

const numObj = {
  a: 3,
  b: {
    c: 4,
    d: {
      e: 5,
      f: 6
    }
  }
};

function nestedEvenSum(object, sum = 0) {
  for (let key in object) {
    console.log(object[key]);
    if (typeof object[key] === "object") {
      sum += nestedEvenSum(object[key]);
    } else if (typeof object[key] === "number" && object[key] % 2 === 0) {
      sum += object[key];
    }
  }
  return sum;
}

console.log(nestedEvenSum(numObj));

// Capitalize words

function capitalizeWords(array, capitalizedArray = []) {
  capitalizedArray.push(array.shift().toUpperCase());
  if (array.length === 0) return capitalizedArray;
  return capitalizeWords(array, capitalizedArray);
}

const wordArray = ["dog", "cat", "apple"];

console.log(capitalizeWords(wordArray));
