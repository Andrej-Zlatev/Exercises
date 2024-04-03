// Filtering Odd Numbers:
// Write a function called filterOddNumbers that takes in an array of numbers
// and a callback function. The callback function should determine whether each
// number in the array is odd or not and return true or false accordingly. Then, call
// filterOddNumbers with an array of numbers and a callback function to filter out the odd numbers.

const arr = [1, 2, 3, 4, 5, 6, 7];

function oddNumbers(numbers) {
  return numbers.filter((num) => num % 2 !== 0);
}

function result(arr, callback) {
  return callback(arr);
}

const firstResult = result(arr, oddNumbers);

console.log(firstResult);
