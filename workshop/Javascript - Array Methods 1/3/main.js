// Exercise 03
// - Create an array of elements of your choice. (e.g [“apple”, “cherry”, “banana”, “date”, “fig”]
// - Prompt the user to enter the name of a fruit to search.
// - Find the position of a given element.
// - Print to the console, the element after the one you found the position of.
// - Otherwise, print to the user that the fruit was not found.

const array = ["apple", "cherry", "banana", "date", "fig"];
const userInput = prompt("Enter fruit name").toUpperCase();

function findPosition(index, arr) {
  const indexNumber = arr.findIndex(
    (item) => item.toUpperCase() === index.toUpperCase()
  );
  return indexNumber !== -1
    ? `Your fruit is ${indexNumber}`
    : `Fruit not found`;
}

const result = findPosition(userInput, array);
console.log(result);
