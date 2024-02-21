// - Prompt the user to enter a string (for example a sentence)
// - Create a JavaScript function that finds the longest word in the given string
// - Show the longest string in the console

const promptSentence = prompt("Write a sentence");

const arr = promptSentence.split(" ");

function findLongestWord(sentence) {
  let result = "";
  sentence.forEach((el) => {
    if (el.length > result.length) {
      result = el;
    }
  });
  return result;
}

const word = findLongestWord(arr);
console.log(word);
