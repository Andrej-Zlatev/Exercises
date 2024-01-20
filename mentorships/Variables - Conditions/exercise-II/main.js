// Exercise II:
// Make a JavaScript program to check what day of the week it is, based on a given number.
// Take the number from prompt(hint: prompt(‘enter number to see what day it is’))
// Make sure you convert that number into a real number(hint: parseInt(number))
// Now, you can check for each of the numbers from 1 - 7 and for each of them show the appropriate weekday in a new < h1 > element that you will create dynamically with JavaScript. (i.e“ It’ s friday”. - in a < h1 > element in body)
// Also, color the text of the < h1 > element in green with JavaScript.
// Do not create the < h1 > element directly in HTML and do not use CSS.
// Make sure you check the exception if the user enters a different number from 1 - 7 or enter just text.If that happens, fill the < h1 > element with text - “Wrong data” and color it red.
// Append / attach the newly created < h1 > element to the body. **
// Use If / if else /else statements to achieve the result.

const day = +prompt("Enter number to see what day it is");
const h1 = document.createElement("h1");
document.body.appendChild(h1);
h1.style.color = "green";

if (day === 1) {
  h1.textContent = "It is monday";
} else if (day === 2) {
  h1.textContent = "It is tuesday";
} else if (day === 3) {
  h1.textContent = "It is wednesday";
} else if (day === 4) {
  h1.textContent = "It is thursday";
} else if (day === 5) {
  h1.textContent = "It is friday";
} else if (day === 6) {
  h1.textContent = "It is saturday";
} else if (day === 7) {
  h1.textContent = "It is sunday";
} else {
  h1.textContent = "Wrong data";
  h1.style.color = "red";
}
