// Filtering Array with Callbacks:
// Write a function called filterArray that takes in an array and a callback function.
// The callback function should define a condition, and filterArray should return a new array containing
//only the elements that satisfy the condition defined by the callback. Test your function with various arrays
// and callback functions.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function evenNum(arr) {
  let evenNumbers = [];
  arr.forEach((num) => {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    }
  });
  return evenNumbers;
}

function filterArray(arr, cb) {
  return cb(arr);
}

const result = filterArray(arr, evenNum);
console.log(result);
