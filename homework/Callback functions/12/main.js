// Array Manipulation with Callbacks:
// Write a function called modifyArray that takes in an array and a callback function.
// The callback function should manipulate the array in some way (e.g., doubling each element,
// squaring each element, etc.). Test your function with various arrays and callback functions.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function doubleIndex(index) {
  return index.map((i) => i + i);
}

function modifyArray(arr, cb) {
  return cb(arr);
}
const result = modifyArray(arr, doubleIndex);
console.log(result);
