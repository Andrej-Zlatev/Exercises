class Cat {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  setName(newName) {
    this.name = newName;
  }

  sayNameAndColor() {
    alert(`Cat name is ${this.name} and color ${this.color}`);
  }
}

const newCat = new Cat("Tom", "Blue");
newCat.sayNameAndColor();

newCat.setName("Simba");
newCat.sayNameAndColor();
