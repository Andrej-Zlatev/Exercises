// function Rectangle(width, height) {
// this.width = width;
// this.height = height;
// }

// Rectangle.prototype.getArea = function () {
// console.log(this.width * this.height);
// };

// class Rectangle {
// // create object's properties inside the constructor
// constructor(width, height) {
// this.width = width;
// this.height = height;
// }

// // methods in classes are defined without the "function" keyword
// getArea() {
// console.log(this.width * this.height);
// }
// }

// const rec1 = new Rectangle(10, 5);

// rec1.getArea();
// console.log(rec1);

// Exercise 1

// We had an exercise about cats some time ago. Let’s rewrite it using object classes.
// 1. Create a new class Cat that takes two inputs: name and color.
// 2. Add a new method to it called “sayNameAndColor” which alerts the name and color of the cat.
// 3. Add another method called “setName” which changes the name of the cat.
// 4. Create a new cat instance (e.g. “Thomas”, “blue”).
// 5. Invoke sayNameAndColor.
// 6. Change the cat’s name via setName.
// 7. Invoke sayNameAndColor again.

// class Cat {
// constructor(name, color) {
// this.name = name;
// this.color = color;
// }

// sayNameAndColor() {
// alert(`the name is: ${this.name} and the color is ${this.color}`);
// }

// setName(newName) {
// this.name = newName;
// }
// }

// const cat = new Cat("Thomas", "blue");

// cat.sayNameAndColor();
// cat.setName("Tom");
// cat.sayNameAndColor();

// exercise 2

const dogs = [];

const nameEl = document.getElementById("name");
const colorEl = document.getElementById("color");
const btn = document.querySelector("button");

let nameVal = "";
let colorVal = "";

class Dog {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
}
const appendDog = (dogs) => {
  const dogsEl = document.getElementById("dogs");
  // exercise 7
  dogsEl.innerHTML = "";

  dogs.forEach((dog) => {
    dogsEl.innerHTML += `<tr>
 <td>${dog.name}</td>
 <td>${dog.color}</td>
 </tr>`;
  });
};

btn.addEventListener("click", () => {
  // another way - color is merged
  if (nameVal && colorVal) {
    const dog = new Dog(nameVal, colorVal);
    dogs.push(dog);

    appendDog(dogs);
  }
  console.log(dogs);
});

nameEl.addEventListener("input", (e) => {
  nameVal = e.target.value;
});

colorEl.addEventListener("input", (e) => {
  colorVal = e.target.value;
});
