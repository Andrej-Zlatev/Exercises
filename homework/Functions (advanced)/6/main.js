const firstNumber = document.querySelector("#firstNumber");
const secondNumber = document.querySelector("#secondNumber");
const addition = document.querySelector("#addition");
const subtraction = document.querySelector("#subtraction");
const multiplication = document.querySelector("#multiplication");
const division = document.querySelector("#division");
const p = document.createElement("p");
document.body.appendChild(p);

addition.addEventListener("click", () => {
  const firstResult = +firstNumber.value;
  const secondResult = +secondNumber.value;
  const result = firstResult + secondResult;
  p.textContent = result;
});

subtraction.addEventListener("click", () => {
  const firstResult = +firstNumber.value;
  const secondResult = +secondNumber.value;
  const result = firstResult - secondResult;
  p.textContent = result;
});

multiplication.addEventListener("click", () => {
  const firstResult = +firstNumber.value;
  const secondResult = +secondNumber.value;
  result = firstResult * secondResult;
  p.textContent = result;
});

division.addEventListener("click", () => {
  const firstResult = +firstNumber.value;
  const secondResult = +secondNumber.value;
  const result = firstResult / secondResult;
  p.textContent = result;
});
