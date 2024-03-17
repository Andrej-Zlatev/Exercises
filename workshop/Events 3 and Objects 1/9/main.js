// Exercise 09
// - There is a html starter file for this exercise.
// - Build a simple todo application where each task has a description and a priority level.
// - Based on the priority level of the tasks in the ToDo list, always show the highest priority
// tasks first in the list.
// - Create a custom function to add a new todo to the list.

const list = document.querySelector("#taskList");
const form = document.querySelector("#taskForm");
const taskDescription = document.querySelector("#taskDescription");
const taskPriority = document.querySelector("#taskPriority");

const todos = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newTodo = {
    text: taskDescription.value,
    prio: taskPriority.value,
  };

  todos.push(newTodo);
  displayTodos();
  form.reset();
});

function displayTodos() {
  todos.sort((a, b) => {
    const priorities = { high: 1, medium: 2, low: 3 };
    return priorities[a.prio] - priorities[b.prio];
  });

  list.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerText = `${todo.text} - prio: ${todo.prio}`;
    list.append(li);
  });
  console.log(todos);
}
