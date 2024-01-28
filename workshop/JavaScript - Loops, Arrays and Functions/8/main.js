// Exercise 3
// From the given 3 numbers , find the smallest and largest, and check
// are they prime.
// Example:
// Number = 13;
// Number2 = 15;
// Number3 = 20;
// Smallest - 13 , Largest-20
// The smallest number 13 is prime , The largest number 20 is not prime.

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function findSmallestAndLargestAndCheckPrime(num1, num2, num3) {
  const smallest = Math.min(num1, num2, num3);
  const largest = Math.max(num1, num2, num3);

  const smallestIsPrime = isPrime(smallest);
  const largestIsPrime = isPrime(largest);

  console.log(`Smallest: ${smallest}, Largest: ${largest}`);
  console.log(
    `Smallest ${smallest} is ${smallestIsPrime ? "prime" : "not prime"}`
  );
  console.log(
    `Largest ${largest} is ${largestIsPrime ? "prime" : "not prime"}`
  );
}

findSmallestAndLargestAndCheckPrime(13, 15, 20);
