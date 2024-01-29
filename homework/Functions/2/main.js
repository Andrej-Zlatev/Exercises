// Exercise II
// 1. Produce a prompt asking for a number
// 2. Define a function that:
// a) Takes a number as an argument
// b) Determines whether that number is even or odd
// c) Writes in the document whether the number is even or odd
// 3. Invoke the function using the number from the prompt at 1

const number = +prompt("Enter a number");

function defineNumberEvenOrOdd(number) {
  if (number % 2 === 0) {
    document.write("The number is even");
  } else {
    document.write("The number is odd");
  }
}

defineNumberEvenOrOdd(number);
