// Exercise I
// Step 1: Write a document with N DOM elements
// Step 2: Select the DOM elements, and add them inside an array
// Step 2: Prompt for a number (between 0 and the number of elements from 2)
// Step 4: Use that number to change the color of element at the given index

const myDiv = document.getElementById("myDiv");
const myH1 = document.getElementById("myH1");
const myP = document.getElementById("myP");

const number = +prompt("Enter a number");

const elements = [myDiv, myH1, myP];

if (number >= 0 && number <= 2) {
  elements[number].style.backgroundColor = "red";
}
