// Exercise 02
// - Create a JavaScript that uses map and reduce to create a function that returns the
// sum of the squares of each number in an array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr = arr.map((item) => item ** 2);

console.log(newArr);

const sumOfSquares = newArr.reduce((sum, item) => {
  return sum + item;
}, 0);

console.log(sumOfSquares);
