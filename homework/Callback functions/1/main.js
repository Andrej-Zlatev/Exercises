// Exercise 1
// 1. Define a function that takes two arguments - a number and a callback
// function.
// 2. Count down from the given number to 0, and then execute the callback
// function.
// 3. Define a second function that simply logs “done” to the console.
// 4. Prompt for a number. Parse the input to an actual number.
// 5. Invoke the function at 1 using the number from 4 and the second function
// from 3.

const counter = (num, callback) => {
  let intervalId = setInterval(() => {
    if (num === 0) {
      clearInterval(intervalId);
      callback();
    } else {
      num--;
      console.log("num", num);
    }
  }, 1000);
};

let done = () => {
  console.log("done");
};

counter(5, done);
