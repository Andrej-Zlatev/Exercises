// Task 2: Remove Duplicates
// Write a JavaScript function to remove duplicate
// items from an array. For sample array:
// let array = [1, 1, 2, 3, 4, 1, 2, 5, 7, 8, 0];
// the output should be:
// removeDuplicates(array) = [1, 2, 3, 4, 5, 7, 8, 0]

let array = [1, 1, 2, 3, 4, 1, 2, 5, 7, 8, 0];

function removeDuplicates(arr) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (!newArray.includes(arr[i])) {
      newArray.push(arr[i]);
    }
  }

  return newArray;
}

let modifiedArray = removeDuplicates(array);

console.log(modifiedArray);
