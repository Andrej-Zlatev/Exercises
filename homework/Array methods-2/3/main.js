// Exercise 3
// 1. Define a function that:
// 1.1. Takes a string as an argument
// 1.2. Reverses the string
// 1.3. Prints the string out in the document
// 2. Prompt for a word, keep the value in a variable
// 3. Invoke the function defined at 1 with the variable from the prompt.

const userInput = prompt("Enter a word");

function reversedString(word) {
  const convertToArray = Array.from(word);
  convertToArray.reverse();
  const convertToString = convertToArray.join(" ");

  console.log(convertToString);
}

reversedString(userInput);
