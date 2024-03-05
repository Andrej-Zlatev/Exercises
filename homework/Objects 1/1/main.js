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

// Exercise 3
// 1. Add a “meow” method to the Cat object. It should simply alert “meow” on the screen when invoked.
// 2. Invoke the “meow” method from the Cat object.

cat.meow = function () {
  // alert("Meow");
};

cat.meow();

// Exercise 4
// 1. Define a “cat1” object.
// 2. Define a method called setName, which receives a string as an input argument and sets that string
// as the cat’s name. (hint: use the “this” keyword)
// 3. Define a method called setColor, which receives a string as an input argument and sets that string as
// the cat’s color (hint: use the “this” keyword)
// 4. Define a method called sayNameAndColor which alerts on screen the name and color of the cat.
// 5. Invoke all methods: setName, then setColor, then sayNameAndColor withdata of your choice.

const nameEL = document.getElementById("name");
const colorEL = document.getElementById("color");
const btnEL = document.getElementById("btn");

const cat1 = {
  setName: function (name) {
    this.name = name;
  },
  setColor: function (color) {
    this.color = color;
  },
  setNameAndColor: function (name, color) {
    alert(`${name},${color}`);
  },
};

nameEL.addEventListener("input", function (e) {
  cat1.setName(e.target.value);
});

colorEL.addEventListener("input", function (e) {
  cat1.setColor(e.target.value);
});

btnEL.addEventListener("click", function () {
  cat1.setNameAndColor(cat1.name, cat1.color);
});

console.log(cat1);
