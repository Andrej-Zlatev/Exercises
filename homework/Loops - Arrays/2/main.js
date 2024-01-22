// Step 1: Declare an array on N numbers (fill it with numbers of your choice)
// Step 2: Using a for loop, print in the console only the numbers larger than 10
// (hint: use if inside the for loop)

const numbers = [1, 5, 15, 22, 14, 4414, 11, 145, 151];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    console.log(numbers[i]);
  }
}
