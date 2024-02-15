// Exercise 5
// 1. Given is this array: let arr = [1,2,3,4];
// 2. Iterate over the array and and find the first odd number from the first one.
// 3. You should get the following in console: 1

const arr = [1, 2, 3, 4];

const oddNumber = arr.find((el) => el % 2 !== 0);
console.log(oddNumber);
