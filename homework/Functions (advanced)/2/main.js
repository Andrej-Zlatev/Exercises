// Exercise 2
// 3
// 1. Rewrite each of the functions from exercise one using arrow functions.
// Try to use the minimum amount of lines / characters possible to achieve the result.
// 2. Add a function that finds the square of a given number (also using an arrow function).
// 3. Add a function that finds the cube of a given number (also using an arrow function).

const subtract = (a, b) => a + b;
const subtractNumber = subtract(5, 5);
console.log(subtractNumber);

const multiply = (a, b) => a * b;
const multiplyNumber = multiply(5, 5);
console.log(multiplyNumber);

const divide = (a, b) => a / b;
const divideNumber = divide(5, 5);
console.log(divideNumber);

const square = (a) => a * a;
const squareNumber = square(5);
console.log(squareNumber);

const cube = (a) => a * a * a;
const cubeNumber = cube(5);
console.log(cubeNumber);
