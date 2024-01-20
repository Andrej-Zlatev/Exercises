// Make 5 different color divs in html.
// - In a variable you put a number between 1 and 5 that comes from prompt.
// - Whatever number you input, you need to make that div disappear.
// - If the number is not between 1 and 5, under the divs in a new paragraph print:
// (e.g. “Please input a number between 1 and 5. Your number is: 10“)

const promptNum = +prompt("Enter a number between 1 and 5");
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const forth = document.getElementById("forth");
const fifth = document.getElementById("fifth");

if (promptNum === 1) {
  first.remove(2);
} else if (promptNum === 2) {
  second.remove(2);
} else if (promptNum === 3) {
  third.remove(2);
} else if (promptNum === 4) {
  forth.remove(2);
} else if (promptNum === 5) {
  fifth.remove(2);
} else {
  let paragraph = document.createElement("p");
  paragraph.textContent = `Please input a number between 1 and 5. Your number is: ${promptNum}`;
  document.body.appendChild(paragraph);
}
