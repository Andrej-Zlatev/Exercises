// Exercise 2
// Create a basic calculator.
// 1. Design an HTML page with input fields for two numbers and buttons for
// addition, subtraction, multiplication, and division.
// 2. Write JavaScript code that performs the corresponding operation when the
// user clicks the respective button and displays the result on the page.
document.addEventListener("DOMContentLoaded", () => {
  const firstNumEl = document.getElementById("firstNum");
  const secondNumEl = document.getElementById("secondNum");
  const addBtn = document.getElementById("addBtn");
  const subBtn = document.getElementById("subBtn");
  const multiBtn = document.getElementById("multiBtn");
  const divBtn = document.getElementById("divBtn");
  const containerEl = document.getElementById("container");

  let p = document.createElement("p");
  containerEl.appendChild(p);
  addBtn.addEventListener("click", () => {
    p.textContent = Number(firstNumEl.value) + Number(secondNumEl.value);
  });

  subBtn.addEventListener("click", () => {
    p.textContent = Number(firstNumEl.value) - Number(secondNumEl.value);
  });

  multiBtn.addEventListener("click", () => {
    p.textContent = Number(firstNumEl.value) * Number(secondNumEl.value);
  });

  divBtn.addEventListener("click", () => {
    p.textContent = Number(firstNumEl.value) / Number(secondNumEl.value);
  });
});
