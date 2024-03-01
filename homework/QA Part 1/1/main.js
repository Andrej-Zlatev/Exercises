// Exercise 1
// 1. Write a JavaScript function that takes a text argument and alerts:
//  "Hello, [name]!".
// 2. Ask the user to enter a name from the prompt
// 3. Rewrite the function by using a fat arrow function

function alertText() {
  const userInput = prompt("Enter a name");
  alert(`Hello ${userInput}`);
}

alertText();

const NewAlertText = () => {
  const userInput = prompt("Enter a name");
  alert(`Hello ${userInput}`);
};

NewAlertText();
