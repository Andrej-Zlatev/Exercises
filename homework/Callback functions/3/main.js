// Exercise 3
// 1. Given is this array: let arr = [1,2,3,4];
// 2. Iterate over the array and create a new array which has every item from the
// first one added up by 10.
// 3. You should get the following in console: [11, 12, 13, 14]

let arr = [1, 2, 3, 4];

const newArr = arr.map((num) => {
  return num + 10;
});

console.log(newArr);
