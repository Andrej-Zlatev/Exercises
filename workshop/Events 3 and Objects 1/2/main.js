// Exercise 02
// - There is a html starter file for this exercise.
// - Build a countdown timer that starts from 60 seconds and goes down to 0.
// - Include start, pause and reset buttons.
// - Use setTimeout or setInterval for the countdown logic.

const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("startButton");
const resetBtn = document.getElementById("resetButton");
const pauseBtn = document.getElementById("pauseButton");
let timerInterval;
let seconds = 60;

const timeStart = () => {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timerEl.textContent = seconds;
    seconds--;
    if (seconds === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
};

const resetInterval = () => {
  clearInterval(timerInterval);
  seconds = 60;
  timerEl.textContent = seconds;
};

const pauseInterval = () => {
  clearInterval(timerInterval);
};

startBtn.addEventListener("click", timeStart);
resetBtn.addEventListener("click", resetInterval);
pauseBtn.addEventListener("click", pauseInterval);
