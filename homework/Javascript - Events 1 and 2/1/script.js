// Exercise 01
// - There is a html starter file with 2 inputs and a paragraph inside.
// - Whenever you focus (click) on the inputs, it should show a help text for that field you
// are currently focusing on in the paragraph below the inputs.
// - The help text can be found in a data attribute in each of the inputs (do not write your
// own help text, use that one).
// - Whenever you click outside of the inputs, it will clear the help text.

const nameEl = document.getElementById("name");
const ageEl = document.getElementById("age");
const helpEl = document.getElementById("help");

const addHelperText = (event) => {
  const helpText = event.target.getAttribute("data-help");
  helpEl.textContent = helpText;
};

const removeHelperText = (event) => {
  helpEl.textContent = "";
};

nameEl.addEventListener("focus", addHelperText);
nameEl.addEventListener("blur", removeHelperText);

ageEl.addEventListener("focus", addHelperText);
ageEl.addEventListener("blur", removeHelperText);
