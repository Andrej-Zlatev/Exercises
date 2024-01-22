// Step 1: Write a document with N DOM elements
// Step 2: Select the DOM elements, and add them inside an array
// Step 3: Using a loop of your choice, iterate through all elements, and replace their contents with the index
// you’re currently iterating.

const div = document.getElementById("myDiv");
const p = document.getElementById("myP");
const h1 = document.getElementById("myH1");

const elements = [div, p, h1];
for (let i = 0; i < elements.length; i++) {
  elements[i].textContent = i;
}
