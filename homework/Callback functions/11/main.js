// Simple Callback Function:
// Write a function called greet that takes in a name and a callback function.
// The callback function should receive the greeted name and log a greeting message
// with it. Test your function by passing it different names and callback functions
//that log different greetings.

function greetingStr(name) {
  return console.log(`Hello ${name} `);
}

function greet(name, cb) {
  return cb(name);
}

greet("Andrej", greetingStr);
