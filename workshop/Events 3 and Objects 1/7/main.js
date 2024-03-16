// Exercise 07
// - There is a html starter file for this exercise.
// - Design a simple quiz where the questions are stored in an array of objects.
// - Display one question at a time and allow the user to select an answer.
// - Show the Next button to proceed to the next question.
// - Show if the answer to the selected alternative in an alert ‘Correct’ or ‘Wrong’
// - Show Quiz Completed when reaching the end of the quiz questions.

// - There is a html starter file for this exercise.
// - Design a simple quiz where the questions are stored in an array of objects.
// - Display one question at a time and allow the user to select an answer.
// - Show the Next button to proceed to the next question.
// - Show if the answer to the selected alternative in an alert ‘Correct’ or ‘Wrong’
// - Show Quiz Completed when reaching the end of the quiz questions.

const quizQuestions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris",
  },
  {
    question: "Who wrote 'Hamlet'?",
    choices: [
      "William Shakespeare",
      "Charles Dickens",
      "Leo Tolstoy",
      "Mark Twain",
    ],
    answer: "William Shakespeare",
  },
];

const div = document.querySelector("#quizContainer");
const question = document.querySelector("#question");
const choices = document.querySelector("#choices");
const nextButton = document.querySelector("#nextButton");

let currentQuestionIndex = 0;

const displayQuestion = () => {
  let questionChoice = quizQuestions[currentQuestionIndex];
  question.innerHTML = questionChoice.question;
  questionChoice.choices.forEach((choice) => {
    let button = document.createElement("button");
    button.textContent = choice;
    choices.appendChild(button);
    button.addEventListener("click", () => {
      if (questionChoice.answer === choice) {
        alert("correct");
      } else {
        alert("wrong");
      }
    });
  });
};

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex > quizQuestions.length - 1) {
    document.write("Quiz completed");
  } else {
    displayQuestion();
  }
});

displayQuestion();
