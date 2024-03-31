// - Use the starter files for this exercise and see screenshot1 as a reference.
// - Create a JavaScript class CountdownTimer with a constructor that accepts the
// target event date and DOM elements for displaying the countdown
// - Within the class create method updateCountdown to calculate the time left until the
// event and update the corresponding DOM elements.
// - In the class constructor, use setInterval to call the updateCountdown method every
// second
// - Add a resetTimer method to the class for changing the event date based on user
// input

const button = document.querySelector("#resetTimer");

const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;
const HOUR_IN_MILLISECONDS = 1000 * 60 * 60;
const MINUTE_IN_MILLISECONDS = 1000 * 60;
const SECOND_IN_MILLISECONDS = 1000;

//Write the class logic here
class CountdownTimer {
  constructor(eventDate, elements) {
    this.eventDate = new Date(eventDate);
    this.elements = elements;
    this.interval = setInterval(() => this.updateCountdown(), 1000);
  }

  updateCountdown() {
    const now = new Date();

    const timeLeft = this.eventDate - now;

    const days = Math.floor(timeLeft / DAY_IN_MILLISECONDS);
    const hours = Math.floor(
      (timeLeft % DAY_IN_MILLISECONDS) / HOUR_IN_MILLISECONDS
    );
    const minutes = Math.floor(
      (timeLeft % HOUR_IN_MILLISECONDS) / MINUTE_IN_MILLISECONDS
    );
    const seconds = Math.floor(
      (timeLeft % MINUTE_IN_MILLISECONDS) / SECOND_IN_MILLISECONDS
    );

    this.elements.days.innerText = days;
    this.elements.hours.innerText = hours;
    this.elements.minutes.innerText = minutes;
    this.elements.seconds.innerText = seconds;
  }

  resetTimer() {
    const newDate = document.querySelector("#newEventDate");

    this.eventDate = new Date(newDate.value);
    this.updateCountdown();
  }
}

// Initialize the countdown timer
const elements = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
};

const countdownTimer = new CountdownTimer("2024-04-01T11:00:00", elements);

button.addEventListener("click", () => {
  countdownTimer.resetTimer();
});
