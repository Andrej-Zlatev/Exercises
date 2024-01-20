// - Make a div with black background in html.
// - Check if two numbers are even, and if they are, give the div background color blue.
// - Check which of the numbers is bigger and show a text in a paragraph: “The bigger number is:
// 12“.
// - If they are the same number (equal) make a paragraph with a text: “The numbers are equal - 12“
// and color the text white.
// - If either of them is also divisible by 3, underline the text.
const firstDiv = document.getElementById("first");
let newP = document.createElement("p");
firstDiv.appendChild(newP);
newP.style.color = "white";

num1 = 3;
num2 = 2;

if (num1 % 2 === 0 && num2 % 2 === 0) {
  firstDiv.style.backgroundColor = "blue";
} else if (num1 > num2) {
  newP.textContent = `The bigger number is: ${num1}`;
} else if (num1 % 3 === 0 || num2 % 3 === 0) {
  newP.style.textDecoration = "underline";
  newP.textContent = "underline";
} else {
  newP.textContent = `The numbers are equal - ${num1}`;
}
