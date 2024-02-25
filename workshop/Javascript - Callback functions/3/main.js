// Create a JavaScript function that takes as parameter an array of words (strings) and
// uses map to return a new array with each word capitalized.

const words = ["array", "of", "words"];

function capitalizeWords(arr) {
  const newArray = arr.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });
  return newArray;
}

console.log(capitalizeWords(words));
