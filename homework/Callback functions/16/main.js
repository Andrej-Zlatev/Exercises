// Define a function called multiplyByTwo that takes a number as input and a callback function.
// Inside multiplyByTwo, multiply the input number by 2, and then execute the callback function with the result.

function multiplyByTwo(num, cb) {
  let result = num * 2;
  cb(result);
}

function result(res) {
  console.log(`The result is ${res}`);
}

multiplyByTwo(5, result);
