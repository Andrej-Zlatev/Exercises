// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const newPerson = new Person("John", "Doe");
// Person.prototype.sayFullName = function () {
//   alert(`Firstname: ${this.firstName} Lastname: ${this.lastName}`);
// };

// // newPerson.sayFullName();

// function Programmer(firstName, lastName, favLanguage) {
//   Person.call(this, firstName, lastName);
//   this.favLanguage = favLanguage;
// }

// Programmer.prototype = Object.create(Person.prototype);
// Programmer.prototype.constructor = Programmer;
// Programmer.prototype.sayFavoriteLanguage = function () {
//   alert(this.favLanguage);
// };
// const newProgrammer = new Programmer("Jane", "Doe", "Javascript");
// newProgrammer.sayFullName();
// newProgrammer.sayFavoriteLanguage();

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   sayFullName() {
//     alert(`Full name: ${this.firstName} ${this.lastName}`);
//   }
// }

// class Programmer extends Person {
//   constructor(firstName, lastName, favLanguage) {
//     super(firstName, lastName);
//     this.favLanguage = favLanguage;
//   }
//   sayFavoriteLanguage() {
//     alert(`Favorite language: ${this.favLanguage}`);
//   }
// }

// const newProgrammer = new Programmer("John", "Doe", "Javascript");
// newProgrammer.sayFullName();
// newProgrammer.sayFavoriteLanguage();

class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
}

class Cat extends Animal {
  constructor(name, color, type) {
    super(name, color);
    this.type = "Cat";
  }
}

class Dog extends Animal {
  constructor(name, color, type) {
    super(name, color);
    this.type = "Dog";
  }
}

const newCat = new Cat("Simba", "Yellow");
const newDog = new Dog("Spikey", "Black");
console.log(newCat);
console.log(newDog);
