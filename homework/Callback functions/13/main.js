// Event Handling with Callbacks:
// Create a simple HTML page with a button. Write JavaScript code that attaches an event listener to the button.
// // When the button is clicked, the callback function should be invoked, which logs a message to the console.
// // Practice attaching different callback functions to the event listener.

const btnEl = document.getElementById("myBtn");

function btnMsg() {
  console.log(`Btn clicked`);
}

btnEl.addEventListener("click", btnMsg);
