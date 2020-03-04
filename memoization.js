// Task 1: Write a function, times10, that takes an argument, n, and multiples n times 10
// a simple multiplication fn
const cache = {};

const times10 = n => {
  const result = n * 10;
  return result;
};

// console.log(times10(5));

// console.log("~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~");
// console.log("times10 returns:", times10(9));

// Task 2: Use an object to cache the results of your times10 function.
// protip 1: Create a function that checks if the value for n has been calculated before.
// protip 2: If the value for n has not been calculated, calculate and then save the result in the cache object.

const memoTimes10 = n => {
  if (n in cache) {
    console.log("cache: ", n);
    return cache[n];
  } else {
    const result = times10(n);
    cache[n] = result;
    return result;
  }
};

// console.log("~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~");
// console.log("Task 2 calculated value:", memoTimes10(7)); // calculated
// console.log("Task 2 cached value:", memoTimes10(7)); // cached

// console.log(cache);

// THIS IS A GENERIC MEMOIZE FUNCTION.
// It takes the result and memoizes it into our cache then pulls from our cache if found!
const memorizedClosureTimes10 = fn => {
  const memoCache = {};

  return function(n) {
    if (n in memoCache) {
      console.log("cache: ", memoCache[n]);
      return memoCache[n];
    } else {
      const result = fn(n);
      memoCache[n] = result;
      return result;
    }
  };
};

const memoClosureTimes10 = memorizedClosureTimes10(times10);

console.log("~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~");
console.log("Task 2 calculated value:", memoClosureTimes10(7)); // calculated
console.log("Task 2 cached value:", memoClosureTimes10(7)); // cached
