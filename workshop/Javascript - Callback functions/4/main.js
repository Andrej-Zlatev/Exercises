// Create a JavaScript function that takes an array of numbers, modifies each number
// using a callback (e.g., multiplies by 3), and then uses another callback to aggregate the
// results into a single value (e.g., the sum of all numbers).

const numbers = [1, 2, 3, 4, 5, 6, 7];

function modifyAndAggregate(arr, modifier, aggregate) {
  arr.map(modifier).forEach(aggregate);
}

function multiplyByThree(num) {
  return num * 3;
}

function result(item) {
  console.log(item);
}
modifyAndAggregate(numbers, multiplyByThree, result);

const sum = numbers.reduce((currentSum, num) => {
  return num + currentSum;
}, 0);

console.log(sum);
