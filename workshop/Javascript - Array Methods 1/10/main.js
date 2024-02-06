// Exercise 10
// - Create an empty array. Implement a menu-driven program that allows users to add
// elements to the end (push()), remove elements from the end (pop()), add elements to the
// beginning (unshift()), and remove elements from the beginning (shift()) of the array.

const arr = [];

function addToEnd(element) {
  arr.push(element);
}

function removeFromEnd() {
  arr.pop();
}

function addToStart(element) {
  arr.unshift(element);
}

function removeFromStart() {
  arr.shift();
}

addToEnd(10);
addToStart(15);
addToStart(22);
removeFromEnd();
removeFromStart();

console.log(arr);
