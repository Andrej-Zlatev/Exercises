"use strict";
// interface playerInfo {
//   name: String;
//   num: Number;
// }
// const logPlayer = (player: playerInfo) => {
//   console.log(player.name, player.num);
// };
// logPlayer({ name: "Cristiano Ronaldo", num: 7 });
// let num = 7;
// num = "seven";
// Exercise I
// - Create two inputs in HTML and a button with text Add
// - In JavaScript create a function that will accept two parameters and simply returns
// the sum of those two parameters
// - Select the inputs and the button in javascript
// - Add event listener that will execute the add function on button click which as
// parameters will take the values from the inputs
// - Add the result of the function into the document
const firstNum = document.querySelector("#firstNum");
const secondNum = document.querySelector("#secondNum");
const btn = document.querySelector("button");
const sum = (a, b) => {
  return a + b;
};
btn === null || btn === void 0
  ? void 0
  : btn.addEventListener("click", () => {
      if (firstNum && secondNum) {
        const result = sum(Number(firstNum.value), Number(secondNum.value));
        console.log(result);
      }
    });
console.log("test");