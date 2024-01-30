// Exercise 1
// 1. Write an empty “ul” element in your html file
// 2. Define a function that:
// 2.1. Takes an array as an input argument
// 2.2. Reverses that array’s order
// 2.3. Prints the members out to the document in the reversed order with
// “li” DOM elements
// 3. Invoke the function using an array of your choice (e.g. numbers from 1-100,
// letters from a-z etc.)

const myList = document.querySelector("#myList");
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function reversedArray(arr) {
  arr.reverse();
  for (let i = 0; i < arr.length; i++) {
    const newLi = document.createElement("li");
    newLi.textContent = arr[i];
    myList.appendChild(newLi);
  }
}

reversedArray(arr);
