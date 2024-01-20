// - Define two variables that will take 2 numbers from prompt.
// - Write a JavaScript program that accepts those numbers and checks whether the first number is
// bigger/smaller or equal than the second.
// - Make a div in html with an id="first".
// - In the div append a new paragraph with text (e.g. - "The smaller of 10 and 45 is 10.")

const num1 = +prompt("First number");
const num2 = +prompt("Second number");
const firstDiv = document.getElementById("first");
let paragraph = document.createElement("p");

if (num1 > num2) {
  paragraph.textContent = `The smaller of ${num1} and ${num2} is ${num2}`;
  firstDiv.appendChild(paragraph);
} else if (num1 < num2) {
  paragraph.textContent = `The smaller of ${num1} and ${num2} is ${num1}`;
  firstDiv.appendChild(paragraph);
} else {
  paragraph.textContent = `The numbers are same`;
  firstDiv.appendChild(paragraph);
}
