// - Make a plain (literal) object which describes a developer.
// - The object should have the following properties: fullName, age, experience & workingPosition.
// It should also consist of two methods:
// - The first method is getSeniority - should check and return the status of the developer. Use the
// experience property to check if the developer is 'junior' (0 to 1 years experience), 'medior'(1 to 3
// years experience) or 'senior'(more than 3 years of experience).
// - The second method is display - should return a string: e.g. 'I am James Gist, 25 years old and i am
// working as a javascript developer'.
// - Call the two methods and see the result in the console.

class Developer {
  constructor(fullName, age, experience, workingPosition) {
    this.fullName = fullName;
    this.age = age;
    this.experience = experience;
    this.workingPosition = workingPosition;
  }
  getSeniority() {
    if (this.experience <= 1) {
      return console.log("Junior developer");
    } else if (this.experience <= 3 && this.experience > 1) {
      return console.log("Medior develiper");
    } else {
      return console.log("Senior developer");
    }
  }
  display() {
    return console.log(
      `I am ${this.fullName}, ${this.age} years old and iam working as ${this.workingPosition}`
    );
  }
}

const newDeveloper = new Developer("Andrej", 34, 1, "React Developer");
newDeveloper.getSeniority();
newDeveloper.display();
