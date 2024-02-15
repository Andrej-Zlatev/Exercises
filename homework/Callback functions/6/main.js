// Exercise 6
// 1. Define an array of numbers of your choice.
// 2. Prompt for a number
// 3. Define a function that takes 2 parameters - the array and the number
// coming from prompt.
// 4. Inside the function, iterate through the initial array and return a new array in
// which every item from the initial array is multiplied with the number that
// comes from prompt.
// 5. Filter the new array where you put only numbers that are bigger or equal
// than 20.
// 6. Return the array from the function.
// 7. Example:
// arr1 = [1,2,3,4,5,6,7]; & entered number 10 in prompt
// the result in console should be: [20, 30, 40, 50, 60, 70]

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const userInput = +prompt("Enter a number");

function transformArray(arr, number) {
  let newArray = arr.map((el) => el * number);
  let array1 = newArray.filter((el) => el >= 20);
  return array1;
}

const result = transformArray(array, userInput);
console.log(result);
