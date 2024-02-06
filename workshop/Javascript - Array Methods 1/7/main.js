// Exercise 07
// - Create an array of numbers. Use splice() to remove elements starting from the 2nd
// element to the 4th element. Then use splice() to insert three new elements (e.g., 7, 8, 9)
// starting at the 2nd position. Print the modified array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function modifiedArray(array) {
  array.splice(2, 2);
  console.log(array);
  array.splice(2, 0, "Three", "Four");
  console.log(array);
}

modifiedArray(arr);
