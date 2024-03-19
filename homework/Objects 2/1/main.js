// function Cat(name, color) {
//   this.name = name;
//   this.color = color;
// }

// const newCat = new Cat("Jack", "Black");

// console.log(newCat);

// function Cat() {
//   this.name = "";
//   this.color = "";
// }

// Cat.prototype.setName = function (name) {
//   this.name = name;
// };

// Cat.prototype.setColor = function (color) {
//   this.color = color;
// };

// Cat.prototype.SayNameAndColor = function () {
//   alert(`The cat name is ${this.name} and the color is ${this.color}`);
// };

// const catTwo = new Cat();
// console.log(catTwo);
// const catOne = new Cat();
// catOne.setName("Tom");
// catOne.setColor("Blue");
// catOne.SayNameAndColor();
// console.log(catOne);

// function Cake(flavor, price, occasion) {
//   this.flavor = flavor;
//   this.price = price;
//   this.occasion = occasion;
// }

// Cake.prototype.describe = function () {
//   console.log(
//     `The ${this.occasion} cake has a ${this.flavor} flavor and costs ${this.price}$`
//   );
// };

// const newCake = new Cake("cherry", 30, "birthday");
// newCake.describe();

function Onlinebook(title, uploader, pages) {
  this.title = title;
  this.uploader = uploader;
  this.pages = pages;
}

Onlinebook.prototype.read = function () {
  console.log(
    `You read all ${this.pages} pages of ${this.title} which is uploaded by ${this.uploader}`
  );
};

const bookOne = new Onlinebook("Naslov", "Avtor", 100);
bookOne.read();
console.log(bookOne);

const arr = [
  { title: "Naslov1", uploader: "Avtor1", pages: 101 },
  { title: "Naslov2", uploader: "Avtor2", pages: 102 },
  { title: "Naslov3", uploader: "Avtor3", pages: 103 },
];

let newArr = [];
arr.forEach((book) => {
  newArr.push(new Onlinebook(book.title, book.uploader, book.pages));
});

console.log(newArr);
