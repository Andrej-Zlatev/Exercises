// Exercise 3
// 1. Create a function that takes an array as input and returns that arrays length as output.
// 2. Try the function on different arrays
// 3. Rewrite the exercise with arrow function in one line.

const arr = [1, 4, 2, 5, 6, 2, 55, 2, 1556, 2];
const newArr = ["Andrej", "Marko", 25, "John", 5, 15];

function arrayLength(array) {
  return array.length;
}

const firstResult = arrayLength(arr);
console.log(firstResult);
const secondResult = arrayLength(newArr);
console.log(secondResult);

const arrLength = (arr) => arr.length;

const thirdResult = arrLength(arr);
console.log(thirdResult);
