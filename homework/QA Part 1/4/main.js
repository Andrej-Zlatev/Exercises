// Exercise 4
// 1. Create an HTML page with a list of numbers (e.g., <ul> with <li> elements)
// 2. Write a JavaScript function that removes duplicate elements from the array
// and console logs the new array with unique numbers

const listItems = document.querySelectorAll("#numbers li");

const findDuplicates = () => {
  let arrayFromListItems = Array.from(listItems);
  let numbersFromList = arrayFromListItems.map((el) => +el.textContent);
  let arr = [...new Set(numbersFromList)];
  return arr;
};

const result = findDuplicates();
console.log(result);
