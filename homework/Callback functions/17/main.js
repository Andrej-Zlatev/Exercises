// Exercise 2:
// Define a function called filterArray that takes an array of numbers and a callback function.
//Inside filterArray, iterate over each number in the array and execute the callback function for each number.
//The callback function should determine if the number is even or odd and log a message accordingly.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterArray(arr, cb) {
  arr.forEach((el) => {
    cb(el);
  });
}

function callBack(num) {
  if (num % 2 === 0) {
    console.log(`The number: ${num} is even`);
  } else {
    console.log(`The number: ${num} is odd`);
  }
}

filterArray(arr, callBack);
