// Exercise 03
// - There is a html starter file for this exercise.
// - Whenever the user enters text into the input field and presses the button, add the text to
// an unordered list on the page.
// - Include a ‘Clear List’ button to empty the list.

const inputEl = document.getElementById("itemInput");
const addItemEl = document.getElementById("addItemButton");
const clearListEl = document.getElementById("clearListButton");
const ulListEl = document.getElementById("itemList");

const userInput = () => {
  let text = inputEl.value;
  let li = document.createElement("li");
  li.textContent = text;
  ulListEl.appendChild(li);
};

const clearList = () => (ulListEl.innerHTML = "");
addItemEl.addEventListener("click", userInput);
clearListEl.addEventListener("click", clearList);
