// Exercise 02
// - There is a html starter file with a div inside.
// - Create a JavaScript function that displays the x and y coordinates of the mouse in
// the div element as you move the cursor across the screen.

const coordinatesEl = document.getElementById("coordinates");
const p = document.getElementById("paragraph");
const displayCoordinates = (e) => {
  p.textContent = `X = ${e.screenX} Y = ${e.screenY}`;
};

coordinatesEl.addEventListener("mousemove", displayCoordinates);
displayCoordinates();
