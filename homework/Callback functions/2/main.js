// Exercise 2
// 1. Define a function which:
// 1.1 Takes an array of numbers as an input argument
// 1.2 Finds the arithmetic mean of the array (use forEach to iterate)
// 1.3 Writes the result in the document
// 2. Invoke the function at 1 using an array of numbers (e.g. [5,8,20,55,190])
// (Tip: an arithmetic mean is simply the sum of all the array numbers divided by the
// length of the array)

const arr = [2, 15, 22, 1, 18, 21];

const arithmeticMean = (array) => {
  let sum = 0;
  array.forEach((el) => {
    sum += el;
  });
  let result = sum / array.length;
  return result;
};

const arithmetic = arithmeticMean(arr);
console.log(arithmetic);
