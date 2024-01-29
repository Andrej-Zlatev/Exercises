// Exercise 1
// Write a function that:
// 1. Produces a prompt that asks for a color name (red, blue, purple...)
// 2. Use the color from the prompt the paint the page in the written color
// 3. Invoke the function at page load

function generateColor() {
  const color = prompt("color name");
  if (!isNaN(color)) {
    alert("Enter color name");
  } else {
    document.body.style.backgroundColor = color;
  }
}

generateColor();
