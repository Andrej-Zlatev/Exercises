// - Iterate through all the numbers from 10 to 20 and check how many tens and how many ones
// each of the numbers has.
// - Print in the console for each number (e.g. - "The number 15 has 1 ten and 5 ones".)

for (let i = 10; i < 20 + 1; i++) {
  const ten = Math.floor(i / 10);
  const ones = i % 10;
  console.log(`The number ${i} has ${ten} ten and ${ones} ones`);
}
