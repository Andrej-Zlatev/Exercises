// 05
// - Make an object with a class called Triangle which will take 3 parameters - for each of its sides.
// - Make a method called check - which will check which type of triangle is the one -
// equilateral/isosceles or scalene and will return a string saying: e.g. 'The triangle with sides a 10, b
// 20 and c 30 is isosceles'.
// - Make a new instance of the class and call the check method on it.
// See the result in the console.

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getType() {
    if (this.a === this.b && this.a === this.c && this.b === this.c) {
      console.log(
        `Triagolnikot so strani ${this.a}, ${this.b} i ${this.c} e ramnostran`
      );
    } else if (this.a === this.b || this.a === this.c || this.b === this.c) {
      console.log(
        `Triagolnikot so strani ${this.a}, ${this.b} i ${this.c} e ramnokrak`
      );
    } else {
      console.log(
        `Triagolnikot so strani ${this.a}, ${this.b} i ${this.c} e raznostran`
      );
    }
  }
}

const triagolnik = new Triangle(4, 4, 4);
triagolnik.getType();
