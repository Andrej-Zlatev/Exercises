// 04
// - Make an object with a Class called Average.
// - It should take 2 parameters (numbers).
// - It should have a method called calcAverage - which will calculate the average value of the two
// numbers and will return a string saying: e.g. 'The average value between 2 and 6 is 4'.
// - Make two new instances of the class, each with 2 numbers of your choice, and a third one with
// numbers from prompt.
// - Call the calcAverage for each instance in the console.

class Average {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  calcAverage() {
    let avg = (this.num1 + this.num2) / 2;
    return console.log(
      `The average value between ${this.num1} and ${this.num2} is ${avg}`
    );
  }
}

const firstObj = new Average(2, 6);
firstObj.calcAverage();

const userInputOne = +prompt("Enter first number");
const userInputTwo = +prompt("Enter second number");

const secondObj = new Average(userInputOne, userInputTwo);
secondObj.calcAverage();
