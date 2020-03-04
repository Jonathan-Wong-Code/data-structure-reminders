// POINT FREE REFACTOR
function isBoy(v) {
  if (v === "isBoy") return true;
  return false;
}

function not(fn) {
  return function negated(...args) {
    return !fn(...args);
  };
}

const isGirl = not(isBoy);

// COMPOSE

function add(x) {
  return function(y) {
    return y + x;
  };
}

function subtract(x) {
  return function(y) {
    return y - x;
  };
}

function composeTwo(fn2, fn1) {
  return function(...args) {
    return fn2(fn1(...args));
  };
}

const addAndSubtract = composeTwo(add(4), subtract(2));

console.log(addAndSubtract(8));

function composeThree(fn3, fn2, fn1) {
  return function(...args) {
    return fn3(fn2(fn1(...args)));
  };
}

const sum = x => y => x + y;
const triple = x => x * 3;
const divBy = y => x => x / y;

// Currying as applied to composition
console.log(composeThree(divBy(2), triple, sum(3))(5));
