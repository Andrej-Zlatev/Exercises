// 1. Prompt for a number
// 2. Define a function that:
//  a) Generates a DOM element from 1 up to a given number argument
//  b) For any number divisible by 3, print “Fizz” as the innerHTML of the DOM element.
//  c) For any number divisible by 5, print “Buzz” as the innerHTML of the DOM element.
//  d) For any number divisible by both 3 and 5, print “FizzBuzz” as the innerHTML of the DOM element.
//  e) For any other number, just print the value of that number as the innerHTML of the DOM element.
//  3. Invoke the function using the number from the prompt as 1.

const promptNumber = +prompt("Enter a number");
const paragraph = document.createElement("p");
function createElement(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    paragraph.innerHTML = "FizzBuzz";
  } else if (number % 5 === 0) {
    paragraph.innerHTML = "Buzz";
  } else if (number % 3 === 0) {
    paragraph.innerHTML = "Fizz";
  } else {
    paragraph.innerHTML = number;
  }
}

document.body.appendChild(paragraph);
createElement(promptNumber);
