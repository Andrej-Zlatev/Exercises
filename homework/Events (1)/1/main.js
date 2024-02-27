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
