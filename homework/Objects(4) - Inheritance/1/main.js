function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const newPerson = new Person("John", "Doe");
Person.prototype.sayFullName = function () {
  alert(`Firstname: ${this.firstName} Lastname: ${this.lastName}`);
};

newPerson.sayFullName();
// console.log(newPerson);
