// Exercise 09
// - Create two arrays of numbers.
// - Merge the two arrays into a single array and sort it based on the numbers in ascending
// order using the sort() method.

const firstArray = [1, 2, 5, 667, 2, 3, 7];
const secondArray = [-1, 67, 9, 2, -22];

const mergedArrays = firstArray.concat(secondArray);
mergedArrays.sort((a, b) => a - b);
console.log(mergedArrays);
