// Exercise 2
// 1. Create an HTML page with a button.
// 2. Write a JavaScript function that changes the background color of the page
// to a random color when the button is clicked.
// (Hint: Use event listeners to handle the button click.)
// (Hint: Use Math.random to generate random color)
// (Tip: All the colors can be represented by the values in this array:
// [‘1’,’2,’3,’,’4’,’5’,’6’,’7’,’8’,’9’,’0’,’A’,’B’,’C’,’D’,’E’,’F’])

const btnEl = document.getElementById("myBtn");

const changeColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const rgbColor = `rgb(${red}, ${green}, ${blue})`;
  document.body.style.backgroundColor = rgbColor;
};

btnEl.addEventListener("click", changeColor);

changeColor();
