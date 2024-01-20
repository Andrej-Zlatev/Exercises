// - Define 5 different numbers (of your choice) in 5 different variables.
// - Write a JavaScript conditional statement to find the largest of those five numbers.
// - Show the largest number in console (e.g. - "Largest is 35".)

num1 = 20;
num2 = 20;
num3 = 20;
num4 = 20;
num5 = 20;

if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
  console.log(`Largest is ${num1}`);
} else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
  console.log(`Largest is ${num2}`);
} else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
  console.log(`Largest is ${num3}`);
} else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
  console.log(`Largest is ${num4}`);
} else if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4) {
  console.log(`Largest is ${num5}`);
} else {
  console.log("There is no greatest number, there are equal numbers");
}
