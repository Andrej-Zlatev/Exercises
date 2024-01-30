// Exercise 4
// 1. Define a function that:
// 1.1. Takes a string as an argument
// 1.2. Converts the string to an array
// 1.3. Sorts it alphabetically
// 1.4 Reverses the string
// 1.5 Prints the string out to the document
// 2. Prompt for a word, keep the value in a variable
// 3. Invoke the function defined at 1 with the variable from the prompt.

const userInput = prompt("Enter a word");

function manipulateString(string) {
  const lowerCase = string.toLowerCase();
  const stringToArr = lowerCase.split("");
  stringToArr.sort();
  stringToArr.reverse();
  const result = stringToArr.join("");
  console.log(result);
}

manipulateString(userInput);
