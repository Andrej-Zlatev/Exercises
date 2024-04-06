// Exercise 5:
// Define a function called calculateAverage that takes an array of numbers and a callback function.
// Inside calculateAverage, calculate the average of the numbers in the array,
// and then execute the callback function with the average value.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function calculateAverage(arr, cb) {
  let sum = 0;
  arr.forEach((el) => {
    sum += el;
  });
  console.log(sum);
  const average = sum / arr.length;
  cb(average);
}

function avgValue(value) {
  console.log(`The average is ${value}`);
}

calculateAverage(arr, avgValue);
