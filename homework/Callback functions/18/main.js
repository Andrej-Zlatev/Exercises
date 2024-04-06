// Exercise 3:
// Define a function called calculateSum that takes two numbers as input and a callback function.
// Inside calculateSum, add the two numbers together, and then execute the callback function with the result.

function calculateSum(num1, num2, cb) {
  const result = num1 + num2;
  cb(result);
}

function seeResult(result) {
  console.log(`The result is ${result}`);
}

calculateSum(5, 10, seeResult);
