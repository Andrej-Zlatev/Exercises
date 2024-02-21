// Exercise 02
// - Initialize an array with two numbers (for example [1,4])
// - Create a JavaScript function that that takes an array of two numbers and returns the
// sum of those two numbers plus the sum of all the numbers between them.
// - Show the result in the console

const array = [1, 10]; // -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

function sumAll(arr) {
  //   arr.sort((a, b) => a - b); // [-1, 9]
  const smallest = Math.min(arr[0], arr[1]);
  const biggest = Math.max(arr[0], arr[1]);

  let sum = 0;

  for (let i = smallest; i <= biggest; i++) {
    sum = sum + i;
  }

  return sum;
}

console.log(sumAll(array));
