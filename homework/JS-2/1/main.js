// Task 1: Array Transformation
// Write a JavaScript function that takes as input an array of numbers and returns a new
//array which is transformed as follows: if the numbers in the array are less than 10, multiply by 2, otherwise multiply by 4. For sample array:
// let array = [1, 5, 10, 11, 20, 34];
// the output should be:
// transformArray(array) = [2, 10, 20, 44, 80, 136]

const array = [1, 5, 10, 11, 20, 34];

function transformArray(arr) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 10) {
      const result = arr[i] * 2;
      newArray.push(result);
    } else {
      const result = arr[i] * 4;
      newArray.push(result);
    }
  }
  return newArray;
}

const modifiedArray = transformArray(array);
console.log(modifiedArray);
