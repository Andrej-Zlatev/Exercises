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

const firstNum: HTMLInputElement | null = document.querySelector("#firstNum");
const secondNum: HTMLInputElement | null = document.querySelector("#secondNum");
const btn: HTMLButtonElement | null = document.querySelector("button");

const sum = (a: number, b: number): number => {
  return a + b;
};

btn?.addEventListener("click", () => {
  if (firstNum && secondNum) {
    const result = sum(Number(firstNum.value), Number(secondNum.value));
    console.log(result);
  }
});

console.log("test");
