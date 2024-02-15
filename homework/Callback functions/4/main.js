// Exercise 4
// 1. Given is this array: let arr = [1,2,3,4];
// 2. Iterate over the array and create a new array which has every even number
// from the first one.
// 3. You should get the following in console: [2, 4]

const arr = [1, 2, 3, 4];

const evenNumbers = arr.filter((num) => num % 2 === 0);

console.log(evenNumbers);
