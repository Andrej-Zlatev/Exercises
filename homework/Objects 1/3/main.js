// Exercise 6
// 1. Create an empty array called “dogs”.
// 2. (In html) create two input fields (with different ids) and a button that says “Add dog”.
// 3. Create a function which:
// a. Gets the values from the two input fields
// b. Creates a new “dog” object using the first value as name and the second as color.
// c. Adds the newly created dog object to the array.
// d. Logs in the console the whole “dogs” array
// 4. Invoke the function when the button gets clicked (using “click” with addEventListener)
// Step 1: Create an empty array called "dogs"
// Define a DogsManager object

const nameInput = document.getElementById("name");
const colorInput = document.getElementById("color");
const addButton = document.getElementById("addDogButton");

dogs = [];

let nameVal = "";
let colorVal = "";

nameInput.addEventListener("input", (e) => {
  nameVal = e.target.value;
});

colorInput.addEventListener("input", (e) => {
  colorVal = e.target.value;
});

addButton.addEventListener("click", () => {
  dogs.push({
    name: nameVal,
    color: colorVal,
  });
  console.log(dogs);
});
