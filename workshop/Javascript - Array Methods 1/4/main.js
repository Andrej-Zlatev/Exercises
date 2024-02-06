// Exercise 04
// - Enter a name in prompt.
// - Create a function which will check whether the name starts with a vowel or a consonant.
// - If it starts with a vowel the function will return "Your name starts with a vowel", and if it
// starts with a consonant the function will return "Your name starts with a consonant".
// - Show the result in the console.
// BONUS: Create a new function which will check and return how many vowels and how
// many consonants you have in your name (from prompt).

const userInput = prompt("Enter a name");
const vowels = ["a", "o", "i", "u", "e"];

// function checkStartLetter(name) {
//   const firstLetter = name.toLowerCase()[0];
//   const answer = vowels.includes(firstLetter);
//   answer === true
//     ? console.log("Your name starts with a vowel")
//     : console.log("Your name starts with a consonant");
// }

// checkStartLetter(userInput);

function countVowelsAndConsonants(name) {
  let nameArray = Array.from(name.toLowerCase());
  let vowelsNumber = 0;
  let consonantsNumber = 0;
  for (let i = 0; i < nameArray.length; i++) {
    if (!isNaN(nameArray[i])) {
      return;
    }
    if (vowels.includes(nameArray[i])) {
      vowelsNumber++;
    } else {
      consonantsNumber++;
    }
  }
  return `Vowels: ${vowelsNumber}, Consonants:${consonantsNumber}`;
}

const result = countVowelsAndConsonants(userInput);
console.log(result);
