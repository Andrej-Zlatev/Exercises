// 03
// - Make an object with a constructor function which describes a car.
// - The constructor function should have properties for: model, year, mileage, owner.
// It should also contain three methods:
// - The first method is getInfo - which returns a string: e.g. 'Ford, 2018, 100000km, owned by James
// Gist'.
// - The second method is km - which will check and return the status of the car based on it’s
// mileage.
// - If the car has less than 10000km mileage - return a string saying 'this is a great car.'
// - If the car has a mileage between 10000 and 250000km - return a string saying 'this is a good
// car'.

function Car(model, year, mileage, owner) {
  this.model = model;
  this.year = year;
  this.mileage = mileage;
  this.owner = owner;
  this.getInfo = function () {
    return console.log(
      `${this.model}, ${this.year}, ${this.mileage}, owned by ${this.owner}`
    );
  };
  this.carStatus = function () {
    if (this.mileage >= 0 && this.mileage < 10000) {
      return console.log(`This is a great car`);
    } else if (this.mileage >= 10000 && this.mileage < 250000) {
      return console.log(`This is a good car`);
    } else {
      return console.log(`this is an old car`);
    }
  };
  this.setOwner = function (newOwner) {
    this.owner = newOwner;
  };
}

const newCar = new Car("Ford", 2011, 250000, "John");
newCar.getInfo();
newCar.carStatus();
newCar.setOwner("Jane");
newCar.getInfo();

// 03
// - If the car has a mileage more than 250000km - return a string saying 'this is an old car'.
// - The third method is setOwner which will change the name of the owner of the car.
// - Lastly: Call getInfo and km methods. Change the name of the owner with the third method -
// setOwner and call the first method getInfo again to check the new owner’s name.
