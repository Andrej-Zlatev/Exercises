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
