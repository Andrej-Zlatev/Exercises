// Create a JavaScript function that checks whether there are two distinct indices i and j in
// the array such that nums[i] is 2 times nums[j].

const array = [10, 2, 6, 3];
function checkIfDoubleExist(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === 2 * arr[j]) {
        return [arr[i], arr[j]];
      }
    }
  }
  return false;
}

console.log(checkIfDoubleExist(array));
