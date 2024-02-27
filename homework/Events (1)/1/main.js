// Create a simple html page with a single div (with a class of “form”) and a single button within
// that div.
// 2. Create a JavaScript file called “form.js”, save it and add it inside the html page using a <script>
// tag.
// 3. Create a function called “onSubmit” which simply alerts “Thank you!” when clicked.
// 4. Add a click event listener to the button and invoke the onSubmit function when the button gets
// clicked.

const btnEl = document.querySelector("button");
function onSubmit() {
  alert("Thank You!");
}

btnEl.addEventListener("click", onSubmit);

// Exercise II
// 1. Using the file and code from Exercise I, add:
// a) A function called onMouseOver that gives the button a css class of “hover”;
// b) A function called onMouseOut that removes the “hover” class from the button;
// 2. To the button, add an event listener for “mouseover” and invoke onMouseOver.
// 3. Also add an event listener for “mouseout” and invoke onMouseOut.

const onMouseMove = () => btnEl.classList.toggle("hover");

btnEl.addEventListener("mouseover", onMouseMove);
btnEl.addEventListener("mouseout", onMouseMove);

// Exercise III
// 1. Add two more divs with a class of “row” to the document.
// 2. In the first one, add a label with the text “Name” and an input tag next to the label.
// 3. In the second one, add a label with the text “About me” and a textarea next to the label.
// 4. Define two empty variables: name and aboutMe.
// 5. Define a function called onNameChange which should simply rewrite the name variable with the
// value from the input field.
// 6. Define a function called onAboutChange which should rewrite the aboutMe variable with the
// value from the textarea.
// 7. Add a “keyup” event listener to both the input and the textarea, triggering onNameChange for
// the input and onAboutChange for the textarea.

const textAreaEl = document.querySelector("#aboutMe");
const nameEl = document.querySelector("#name");
let name = "";
let aboutMe = "";

const onNameChange = () => {
  name = nameEl.value;
  console.log(name);
};

const onAboutChange = () => {
  aboutMe = textAreaEl.value;
  console.log(aboutMe);
};
nameEl.addEventListener("keyup", onNameChange);
textAreaEl.addEventListener("keyup", onAboutChange);
