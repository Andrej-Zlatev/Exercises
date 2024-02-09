// Exercise 4
// 1. Prompt for a word.
// 2. Create an arrow function that will take a word as in input and return a reversed version of
// that same word.
// (Hint: make an array from the given word & then use array methods on it.)

const userInput = prompt("Enter a word.");

const reversedWord = (word) => Array.from(word).reverse().join(" ");

const result = reversedWord(userInput);

console.log(result);
