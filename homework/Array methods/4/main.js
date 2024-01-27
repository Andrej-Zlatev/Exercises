// 1. Define an array with numbers from 1-10.
// 2. Iterate over the array using for, while or do-while
// 3. Create a new array made up of array pairs, as follows in the example:
// let myArr = [1, 2, 3, 4, 5];
// result = [[1, 2], [2, 3], [3, 4], [4, 5]];
// (Tip: an Array can have Arrays as it’s members)
// (Hint: use slice, if it wasn’t obvious :) )

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = [];

for (let i = 0; i < arr.length - 1; i++) {
  //   let currentElement = arr[i];
  //   let nextElement = arr[i + 1];
  //   newArr.push([currentElement, nextElement]);
  let sliced = arr.slice(i, i + 2);
  console.log(sliced);
}
