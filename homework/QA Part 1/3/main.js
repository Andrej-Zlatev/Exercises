// Exercise 3
// 1. Create an HTML page with a list of numbers (e.g., <ul> with <li> elements)
// and a button.
// 2. Write a JavaScript function that finds the largest number in the list and
// displays an alert with that number when the button is clicked.

const ulEl = document.querySelectorAll("#myList li");
const btnEl = document.querySelector("#myBtn");

const findLargestNumber = () => {
  let currentIndex = 0;
  ulEl.forEach((el) => {
    let text = Number(el.textContent);
    if (currentIndex < text) {
      currentIndex = text;
    }
  });
  alert(`The largest number is ${currentIndex}`);
};

btnEl.addEventListener("click", findLargestNumber);
