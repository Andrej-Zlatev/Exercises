// Exercise 01
// - Create a JavaScript function `operationOnSum` that takes as parameters 2
// numbers and 1 callback function
// - The `operationOnSum` function calculates the sum between the first 2 number
// parameters, and passes the result to the callback function
// - Create 2 callback functions which can be passed on the original function
// `operationOnSum`
// - The first callback function `divideByHalf` takes the sum calculated and divides it by
// half
// - The second callback function `multiplyByTwo` takes the sum calculates and
// multiplies it by two
// - Show in console the results when we pass the first callback and then the second
// callback

function operationOnSum(num1, num2, callback) {
  const sum = num1 + num2;

  callback(sum);
}

function divideByHalf(sum) {
  const result = sum / 2;
  console.log(`Result after dividing by half: ${result}`);
}

function multiplyByTwo(sum) {
  const result = sum * 2;
  console.log(`Result after multiplying by two: ${result}`);
}

operationOnSum(10, 20, divideByHalf);

operationOnSum(10, 20, multiplyByTwo);
