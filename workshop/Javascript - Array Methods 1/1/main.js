// - Create an array of names with 7 elements inside it.
// - Create another empty array.
// - Iterate through the first array, find the names which stay on an even position (0 is not
// even number) in the first array and add them in the second array.
// - Print each of the names inside the second array split with a coma.
// e.g.
// arr1= ["Mark", "Bill", "Anna","John","Elena"];
// arr2=["Anna","Elena"];
// console: Anna,Elena

const names = ["Mark", "Bill", "Anna", "John", "Elena", "Andrei", "Oliver"];
const arr = [];

for (let i = 2; i < names.length; i += 2) {
  const evenPositions = names[i];
  arr.push(evenPositions);
}

console.log(arr);
