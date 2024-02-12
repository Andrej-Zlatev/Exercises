// Exercise 5
// 1. Create a function that will take an array as an input
// 2. Calculate and return the sum of all the elements of the given array.
// 3. Try if the same function works on this array [5, '5', 3] which has an element as a string.

const array = [1, 5, 2, 6, 15, 22, 21];
const newArray = [5, "5", 3];
function sumFromArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i]) && typeof arr[i] === "number") {
      sum += arr[i];
    }
    // to convert string to number and sum it
    //sum += +arr[i];
  }
  return sum;
}

const result = sumFromArr(array);
const newResult = sumFromArr(newArray);
console.log(result);
console.log(newResult);
