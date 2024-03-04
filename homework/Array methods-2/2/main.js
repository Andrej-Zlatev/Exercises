// Exercise 2
// 1. Write an array of 10 words of your choice
// eg. [“ant”, “barbecue”, “something”, “tree” ... ]
// 2. Define a function that:
// 2.1. Takes an word as an input argument
// 2.2. Checks whether that word is inside the array defined above
// 2.3. Writes in the document “Found” if it was found and “Not found” if it wasn’t found
// 3. Prompt for a word, keep the value in a variable
// 4. Invoke the function defined at 2 with the variable from the prompt

const arr = [
  "ant",
  "barbecue",
  "something",
  "tree",
  "John",
  "Chair",
  "Desk",
  "Telephone",
  "Book",
  "Sunglasses",
];

const userInput = prompt("Type a word");
function includedInArray(word) {
  if (!isNaN(word)) {
    alert("Enter a word");
  } else if (arr.includes(word)) {
    alert("Found");
  } else {
    alert("Not found");
  }
}

includedInArray(userInput);
