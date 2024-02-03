// Exercise 02
// - Create a function that takes a sentence as input and reverses the order of words in
// the sentence. You can use methods like split(), reverse(), and join() to accomplish
// this.
// e.g ‘The brown fox’ becomes ‘fox brown The’
const sentence = "The brown fox";
function reverseOrder(sentence) {
  //   const convertingToArr = Array.from(sentence);
  const splitArr = sentence.split(" ");
  splitArr.reverse();
  const str = splitArr.join(" ");
  console.log(str);
}

reverseOrder(sentence);
