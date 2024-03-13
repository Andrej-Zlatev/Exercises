// Exercise 01
// - There is a html starter file for this exercise.
// - When the button is clicked, it should change the background color of the page to a
// random color every 3 seconds.
// - Use setInterval for the color change.

const btnEl = document.getElementById("colorChangeBtn");

const changeBackgroundColor = () => {
  setInterval(() => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }, 3000);
};

btnEl.addEventListener("click", changeBackgroundColor);
