// - Use the starter files for this exercise and see screenshot3 as a reference.
// - Get the user birthdate from the input and create a custom class AgeCalculator that
// initializes with the birthdate of the user:
// ○ Add method calculateAge to calculate how old the user is in years, months and
// weeks
// ○ Add a function displayAge that shows the age of the user in years, months and
// weeks as calculated in the method of the class

const calculateAgeButton = document.querySelector("#calculateAge");
const birthdate = document.querySelector("#birthdate");
const result = document.querySelector("#result");

class AgeCalculator {
  constructor(birthdate) {
    this.birthdate = new Date(birthdate);
  }

  calculateAge() {
    const now = new Date();

    const years = now.getFullYear() - this.birthdate.getFullYear();

    const birthdateThisYear = new Date(
      now.getFullYear(),
      this.birthdate.getMonth(),
      this.birthdate.getDate()
    );

    if (now < birthdateThisYear) {
      // users birthday is in the future this year
      return {
        years: years - 1,
        months: 12 - (this.birthdate.getMonth() + 1) + now.getMonth() + 1,
      };
    } else {
      const months = now.getMonth() - this.birthdate.getMonth();

      return {
        years: years,
        months: months,
      };
    }
  }
}

function ageDisplay() {
  const date = birthdate.value;

  if (date) {
    const ageCalculator = new AgeCalculator(date);
    const { years, months } = ageCalculator.calculateAge();

    result.innerText = `Your age is ${years} years and ${months} months`;
  } else {
    result.innerText = `Please enter your birthdate`;
  }
}

calculateAgeButton.addEventListener("click", ageDisplay);
