// Exercise III:
// Rewrite exercise II using switch statement in JavScript. Make sure everything continues working the same.

const day = +prompt("Enter number to see what day it is");
const h1 = document.createElement("h1");
document.body.appendChild(h1);
h1.style.color = "green";

switch (day) {
  case 1:
    h1.textContent = "It is Monday";
    break;
  case 2:
    h1.textContent = "It is Tuesday";
    break;
  case 3:
    h1.textContent = "It is Wednesday";
    break;
  case 4:
    h1.textContent = "It is Thursday";
    break;
  case 5:
    h1.textContent = "It is Friday";
    break;
  case 6:
    h1.textContent = "It is Saturday";
    break;
  case 7:
    h1.textContent = "It is Sunday";
    break;
  default:
    h1.textContent = "Wrong data";
    h1.style.color = "red";
    break;
}
