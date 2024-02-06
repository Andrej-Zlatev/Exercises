// Exercise 06
// - Implement a queue using an array. Create functions enqueue(item) to add an item to the
// queue (use push()), and dequeue() to remove the first item from the queue (use shift()).
// Test the queue by adding and removing items.

const queue = [];
function enqueue(item) {
  queue.push(item);
  console.log(queue);
}

function dequeue(item) {
  queue.shift(item);
  console.log(queue);
}
enqueue(5);
dequeue(5);
