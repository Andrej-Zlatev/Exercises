// Exercise 1
// Create a "To-Do List" application.
// 1. Design an HTML page with an input field and a button to add tasks to a list
// of results.
// 2. Write JavaScript code that adds the task to the list when the button is
// clicked.

const inputTask = document.getElementById("addTask");
const btnEl = document.getElementById("addBtn");
const ulEl = document.getElementById("ulEl");

const addTask = () => {
  let li = document.createElement("li");
  li.textContent = inputTask.value;
  ulEl.appendChild(li);
};

inputTask.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

btnEl.addEventListener("click", addTask);
