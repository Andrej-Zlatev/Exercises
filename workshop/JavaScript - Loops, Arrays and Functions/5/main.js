// - Define an unordered list of items in html.
// - Show a prompt on the screen to input a number.
// - Define a function that takes a number as an input.
// - Using the number given as an input, color red all the elements of the unordered list up to the
// given number.
// - If the input gets something other than a number show an alert box saying that it’s not a number
// .
// - If the entered number is bigger than the number of <li> elements, color all of them.
// HINT: Number.isInteger();
// HINT: parseInt();

const num = +prompt("Input a number");
const list = document.querySelectorAll("li");

function colorAllEl(number) {
  if (isNaN(number)) {
    alert("Invalid number");
    return;
  }

  for (let i = 0; i < list.length; i++) {
    if (number > i) {
      list[i].style.backgroundColor = "red";
    }
  }
}

colorAllEl(num);
