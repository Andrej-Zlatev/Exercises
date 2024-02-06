// Exercise 05
// - Write a JavaScript function that takes an array and a chunk size as input and returns an
// array of arrays, where each sub-array has a length equal to the chunk size.
// - For example, chunkArray([1, 2, 3, 4, 5], 2) should return [[1, 2], [3, 4], [5]].

function chunkArray(arr, chunkArray) {
  const newArray = [];
  for (let i = 0; i < arr.length; i += chunkArray) {
    const slicedArray = arr.slice(i, i + chunkArray);
    newArray.push(slicedArray);
  }
  console.log(newArray);
}

chunkArray([1, 2, 3, 4, 5], 2);
