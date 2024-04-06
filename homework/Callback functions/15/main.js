// Chaining Callbacks:
// Write a series of functions that perform different operations (e.g., add, subtract, multiply, divide).
// Each function should take in two numbers and a callback function, perform the operation,
// and then invoke the callback function with the result. Chain these functions together to perform a series of operations,
// such as add, then multiply, then subtract, etc.

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function result(a, b, cb) {
  return cb(a, b);
}

console.log(result(5, 5, add));
console.log(result(20, 5, subtract));
console.log(result(5, 5, multiply));
console.log(result(20, 5, divide));
