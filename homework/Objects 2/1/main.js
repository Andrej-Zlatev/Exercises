// function Cat(name, color) {
//   this.name = name;
//   this.color = color;
// }

// const newCat = new Cat("Jack", "Black");

// console.log(newCat);

function Cat() {
  this.name = "";
  this.color = "";
  this.setName = function (name) {
    this.name = name;
  };
  this.setColor = function (color) {
    this.color = color;
  };
  this.SayNameAndColor = function () {
    alert(`The cat name is ${this.name} and the color is ${this.color}`);
  };
}

const catOne = new Cat();
catOne.setName("Tom");
catOne.setColor("Blue");
catOne.SayNameAndColor();
console.log(catOne);
