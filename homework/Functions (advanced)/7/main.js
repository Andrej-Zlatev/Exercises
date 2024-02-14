const taskInput = document.querySelector("#task");
const btn = document.querySelector("#myBtn");
const list = document.querySelector("#myList");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const task = taskInput.value;
  const li = document.createElement("li");
  li.textContent = task;
  list.appendChild(li);
  const liBtn = document.createElement("button");
  liBtn.textContent = "X";
  liBtn.style.marginLeft = "2rem";
  li.appendChild(liBtn);
  liBtn.addEventListener("click", () => {
    li.remove();
  });
});
