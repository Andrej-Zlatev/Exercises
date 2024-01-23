// Step 1: Write a document with an unordered list (ul), with N list items (li)
// Step 2: Select the “li” elements using a single instruction
// (hint: document.querySelectorAll)
// Step 3: Paint every even member red
// Step 4: Paint every odd member blue
// (hint: read a bit about the “/” and “%” operators in JS.)
// Step 5: NO CSS SELECTORS ALLOWED (in other words, you can’t use “nth-child” selectors inside your
// stylesheet, if you use one).

const liElements = document.querySelectorAll("li");

for (let i = 0; i < liElements.length; i++) {
  if (i % 2 === 0) {
    liElements[i].style.backgroundColor = "red";
  } else {
    liElements[i].style.backgroundColor = "blue";
  }
}
