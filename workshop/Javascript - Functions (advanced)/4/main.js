// Exercise 05
// - Create a JavaScript function to find all the duplicates in an array where the numbers are
// in the range 1 to n (inclusive), where n is the length of the array.

const array = [4, 3, 2, 7, 8, 2, 3];

function findAllDuplicates(niza) {
  const duplicates = [];

  for (let i = 0; i < niza.length; i++) {
    // 4, 3, 2, 7, 8, 2, 3
    for (let j = 0; j < niza.length; j++) {
      // 4, 3, 2, 7, 8, 2, 3
      if (niza[i] === niza[j] && i !== j && !duplicates.includes(niza[i])) {
        duplicates.push(niza[i]);
      }
    }
  }
  return duplicates;
}

console.log(findAllDuplicates(array));
