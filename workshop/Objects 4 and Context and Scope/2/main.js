// Exercise 02
// - Use the starter files for this exercise and see screenshot2 as a reference.
// - Get the user name from the input and create a custom function updateGreeting so
// that you can greet the user based on the current time:
// ○ If the time is between 5 (included) and 12 (not included), greet Good morning
// ○ If the time is between 12 (included) and 18 (not included), greet Good
// afternoon
// ○ Otherwise greet Good evening

const greetingEl = document.getElementById("greeting");
const nameInputEl = document.getElementById("userName");
const newEventBtn = document.getElementById("newEventDate");

function updateGreeting() {
  const currentDate = new Date();
  const name = nameInputEl.value;
  const hour = currentDate.getHours();
  if (!name) {
    return;
  }
  if (hour >= 5 && hour < 12) {
    greetingEl.textContent = `Good morning, ${name}!`;
  } else if (hour >= 12 && hour < 17) {
    greetingEl.textContent = `Good afternoon, ${name}!`;
  } else if (hour >= 17 && hour < 21) {
    greetingEl.textContent = `Good evening, ${name}!`;
  } else {
    greetingEl.textContent = `Good night, ${name}!`;
  }
}

newEventBtn.addEventListener("click", updateGreeting);
