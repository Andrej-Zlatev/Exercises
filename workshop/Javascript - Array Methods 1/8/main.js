// Exercise 08
// - Create an array of numbers in random order. Use sort() to sort the array in ascending
// order. Print the sorted array.

const array = [1, 6, 32, 72, 7, 9, 15, 2];

array.sort((a, b) => a - b);
console.log(array);
