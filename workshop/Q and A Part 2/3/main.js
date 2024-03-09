// Exercise 4
// Form Validation
// 1. Create an HTML page with a form that allows the user to enter their email
// address and password.
// 2. When the form is submitted, use JavaScript to validate the inputs.
// 3. Display an error message if the name field is empty or the email address is
// not in a valid format.
// 4. If both inputs are valid, display a success message.
const form = document.getElementById("myForm");
const emailEl = document.getElementById("myEmail");
const passwordEl = document.getElementById("myPassword");
const btnSubmit = document.getElementById("submit");
const errorDiv = document.getElementById("error");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let errorMessage = document.createElement("p");
error.appendChild(errorMessage);

const checkFields = () => {
  if (!passwordEl.value || !emailEl.value) {
    errorMessage.textContent = "Please fill all fields";
    return false;
  }
  if (!emailRegex.test(emailEl.value)) {
    errorMessage.textContent = "Please enter a valid email";
    return false;
  }
  errorMessage.textContent = "";
  return true;
};

emailEl.addEventListener("input", () => {
  checkFields();
});

passwordEl.addEventListener("input", () => {
  checkFields();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (checkFields()) {
    console.log("Form submitted successfully");
  }
});
