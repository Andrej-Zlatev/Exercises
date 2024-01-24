// 1. Define an array with numbers from 1-10.
// 2. Iterate over the array using for, while or do-while
// 3. Split half of the array into a new array
// (Hint: you can use both push and pop to achieve this)
// 4. The end result should look like:
// array = [1,2,3,4,5];
// arrayNew = [6,7,8,9,10];

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [...arr];
const newArr = [];

for (let i = arr2.length / 2 + 1; i <= arr2.length; i++) {
  let removed = arr.pop();
  newArr.push(removed);
}

console.log(arr);
console.log(newArr.reverse());
