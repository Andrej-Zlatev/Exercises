// Exercise IV:
// Make a JavaScript program to calculate the hours, minutes and seconds based on an entered number (seconds) in prompt. (i.e. 3663)
// In the starter files in HTML for this exercise, you will notice a blank <h1> inside the body already sitting there. (do not delete this one, you will need it.)
// Get and save the number coming from prompt (the seconds)
// Make a calculation and get the appropriate time for the hours, minutes and seconds.
// Select the <h1> element from the body.
// Add a text with JavaScript to the <h1> element saying: “The time is hours:minutes:seconds” based on the calculation from above (i.e “The time is 1h:1min:3sec.”).
// Underline the text of the <h1> and center it horizontally with JavaScript.
// (text-decoration: underline; text-align: center;)
// Do not use CSS for the styling.

const time = +prompt("enter the number of seconds");
const timeDisplay = document.getElementById("timeDisplay");
const hours = Math.floor(time / 3600);
const minutes = Math.floor((time % 3600) / 60);
const remainingSeconds = time % 60;

if (time >= 0 && time <= 86400) {
  timeDisplay.textContent = `The time is ${hours}h:${minutes}min:${remainingSeconds}sec.`;
  timeDisplay.style.textDecoration = "underline";
  timeDisplay.style.textAlign = "center";
} else {
  timeDisplay.textContent = "Please enter a non-negative number for seconds.";
}
