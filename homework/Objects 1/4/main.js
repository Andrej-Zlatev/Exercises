// Exercise 1
const student = {
  name: "John Doe",
  age: 20,
  grades: {
    math: 85,
    science: 90,
    history: 75,
  },
};

// Task: Find all subjects for which 'student' has grades
// Expected output: ["math", "science", "history"]

const grades = Object.keys(student.grades);
console.log(grades);
