// Exercise III
// 1. Create an unordered list with some elements (any number)
// 2. Prompt for a number
// 3. Create a function that:
//  a) Takes a number argument
//  b) Paints in red an element from the unordered list at the index of the number argument above
//  4. Invoke the function using the number prompt at 1

const number = +prompt("Enter a number");
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

const list = [first, second, third];
function paintElement(number) {
  if (number >= 0 && number <= list.length) {
    for (let i = 0; i < list.length; i++) {
      list[number - 1].style.color = "red";
    }
  } else {
    document.body.textContent = "Wrong number";
  }
}

paintElement(number);
