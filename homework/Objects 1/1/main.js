// Exercise 1
// 1. Define an object called “Cat”.
// 2. The “Cat” object should also contain two variables (properties) called “name” and “color”. Set some
// values to them (for example: “Tom” and “blue”).

const cat = {
  name: "Tom",
  color: "Blue",
};

console.log(cat.name, cat.color);

// Exercise 2
// 1. Change the values of the cat object from the previous exercise to something else, using dot notation.
// 2. Try the same thing using bracket notation.

cat.name = "Jack";
cat.color = "Black";
console.log(cat.name, cat.color);

cat["name"] = "Simba";
cat["color"] = "Yellow";

console.log(cat.name, cat.color);
