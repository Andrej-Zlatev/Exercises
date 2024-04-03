// Transform String:
// Create a function called transformString that takes in a string and a callback function.
// The callback function should transform the string in some way
//(e.g., converting it to uppercase or reversing it) and return the result.
// Then, call transformString with a string and different callback functions to perform various transformations.

const string = ["S", "T", "R", "I", "N", "G"];
function reverseStr(str) {
  return str.reverse();
}

function strToLowerCase(str) {
  let convertToStr = str.join();
  return convertToStr.toLowerCase();
}
function transformString(str, cb) {
  return cb(str);
}

const firstResult = transformString(string, reverseStr);
const secondResult = transformString(string, strToLowerCase);
console.log(firstResult);
console.log(secondResult);
