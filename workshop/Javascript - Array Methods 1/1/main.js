// - Create an array of names with 7 elements inside it.
// - Create another empty array.
// - Iterate through the first array, find the names which stay on an even position (0 is not
// even number) in the first array and add them in the second array.
// - Print each of the names inside the second array split with a coma.
// e.g.
// arr1= ["Mark", "Bill", "Anna","John","Elena"];
// arr2=["Anna","Elena"];
// console: Anna,Elena

const names = ["Ognen", "Ana", "Petar", "Biljana", "Marko", "Marija", "Lena"];
const emptyArray = [];

for (let i = 0; i < names.length; i++) {
  if (i !== 0 && i % 2 === 0) {
    emptyArray.push(names[i]);
  }
}

console.log(emptyArray.join(", "));
