// - In 2 variables you put 2 numbers that come from prompt.
// - Write a program with basic calculator operations (+, -, *, /) which prints every result of the
// operations between those 2 numbers in the console.

const firstNum = +prompt("Enter a number");
const secondNum = +prompt("Enter a number");

console.log(`Zbirot od ${firstNum} i ${secondNum} e ${firstNum + secondNum}`);
console.log(
  `Razlikata od ${firstNum} i ${secondNum} e ${firstNum - secondNum}`
);
console.log(
  `Proizvodot od ${firstNum} i ${secondNum} e ${firstNum * secondNum}`
);
console.log(
  `Kolicnikot od ${firstNum} i ${secondNum} e ${firstNum / secondNum}`
);
console.log(
  `Ostatokot od delenjeto na ${firstNum} i ${secondNum} e ${
    firstNum % secondNum
  }`
);
