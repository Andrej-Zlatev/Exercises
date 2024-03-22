// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
// }

// Rectangle.prototype.getArea = function () {
//   console.log(this.width * this.height);
// };

// class Rectangle {
//   // create object's properties inside the constructor
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   // methods in classes are defined without the "function" keyword
//   getArea() {
//     console.log(this.width * this.height);
//   }
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
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }

//   sayNameAndColor() {
//     alert(`the name is: ${this.name} and the color is ${this.color}`);
//   }

//   setName(newName) {
//     this.name = newName;
//   }
// }

// const cat = new Cat("Thomas", "blue");

// cat.sayNameAndColor();
// cat.setName("Tom");
// cat.sayNameAndColor();

// exercise 2

class Animal {
  constructor(name, color, id) {
    this.id = id;
    this.name = name;
    this.color = color;
  }
}

class Dog extends Animal {
  constructor(name, color, id) {
    super(name, color, id);
    // type should also go in Animal in real case scenario
    // Dog should contain properties/methods specific for dogs only
    this.type = "dog";
  }
}

class Cat extends Animal {
  constructor(name, color, id) {
    super(name, color, id);
    this.type = "cat";
  }
}

// Exercise 6

// Extend the previous exercise:
// 1. Define an extra animal type (Cat, Bird...) which extends Animal. Just like Dog, it should also have an
// animalType property which has the value of 'cat' or 'bird', as appropriate.
// 2. Add a dropdown next to the text inputs which contains all of the possible animal types. (also in the
// homework, so if you did it, use that)
// 3. When a new animal is created, use the correct instance for that Animal (Dog, Bird, Cat)
class Bird extends Animal {
  constructor(name, color, id) {
    super(name, color, id);
    this.type = "bird";
  }
}

const pets = [];
let nextId = 0;
let editingPetId;

const nameEl = document.getElementById("name");
const colorEl = document.getElementById("color");
const petSelection = document.getElementById("petType");
const btn = document.querySelector("button");

let nameVal = "";
let colorVal = "";

const appendPet = (pets) => {
  const petsEl = document.getElementById("pets");
  petsEl.innerHTML = "";

  pets.forEach((pet) => {
    const row = document.createElement("tr");

    // name
    const nameCell = document.createElement("td");
    nameCell.textContent = pet.name;
    row.appendChild(nameCell);

    // color
    const colorCell = document.createElement("td");
    colorCell.textContent = pet.color;
    row.appendChild(colorCell);

    const petTypeCell = document.createElement("td");
    petTypeCell.textContent = pet.type;
    row.appendChild(petTypeCell);

    // edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    row.appendChild(editBtn);
    editBtn.addEventListener("click", () => {
      nameEl.value = pet.name;
      colorEl.value = pet.color;
      editingPetId = pet.id;
      btn.textContent = "Save";
    });

    petsEl.appendChild(row);
  });

  nameEl.value = "";
  colorEl.value = "";
};

btn.addEventListener("click", () => {
  // find the index of a pet we're editing based on editingPetId

  if (editingPetId) {
    const index = pets.findIndex((pet) => pet.id === editingPetId);
    pets[index].name = nameEl.value;
    pets[index].color = colorEl.value;
    editingPetId = undefined;
    btn.textContent = "Add pet";
  } else {
    if (nameVal && colorVal) {
      nextId++;
      // const pet =
      //   petSelection.value === "dog"
      //     ? new Dog(nameVal, colorVal, nextId)
      //     : new Cat(nameVal, colorVal, nextId);
      let pet;
      if (petSelection.value === "dog") {
        pet = new Dog(nameVal, colorVal, nextId);
      } else if (petSelection.value === "cat") {
        pet = new Cat(nameVal, colorVal, nextId);
      } else {
        pet = new Bird(nameVal, colorVal, nextId);
      }
      pets.push(pet);
      console.log(pets);
    }
  }
  appendPet(pets);
});

nameEl.addEventListener("input", (e) => {
  nameVal = e.target.value;
});

colorEl.addEventListener("input", (e) => {
  colorVal = e.target.value;
});

const createAnimal = (id, name, color) => {
  return {
    id,
    name,
    color,
  };
};
