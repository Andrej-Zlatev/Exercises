// Exercise 5
// 1. Define a variable with the word: ‘javascript’.
// 2. Find the position of the letter ‘s’ inside.
// 3. Based on that position, create 2 arrays:
// ["j", "a", "v", "a"] & ["s", "c", "r", "i", "p", t"]
// 4. Merge the two arrays so they form a word ‘scriptjava’.

let word = "javascript";

const positionOfS = word.indexOf("s");
const arr = Array.from(word);
const firstArr = arr.slice(0, positionOfS);
const secondArr = arr.slice(positionOfS, arr.length);
const combinedArrays = secondArr.concat(firstArr);
const str = combinedArrays.join("");
console.log(firstArr);
console.log(secondArr);
console.log(combinedArrays);
console.log(str);
