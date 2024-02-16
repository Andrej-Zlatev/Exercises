// Exercise 7
// 1. Define a function which:
// 1.1 Takes three parameters: length, width, and a callback function.
// 1.2 The functions should check if both length and width are positive numbers.
// 1.3 If either length or width is not a positive number, call the callback function
// with an error message.
// 1.4 If both length and width are positive numbers, calculate the area (length *
// width) and call the callback function with the result.
// 2. Define a JavaScript function that displays the result and which:
// 2.1 Takes two parameters: error and result.
// 2.2 If error is not null, display the error message on the DOM.
// 2.3 If error is null, display the calculated area on the webpage.

const findArea = (length, width, callback) => {
  if (length > 0 && width > 0) {
    let area = length * width;
    callback(area);
  } else {
    callback("Error happened");
  }
};

const displayResult = (result) => {
  let div = document.createElement("div");

  div.textContent = result;

  document.body.appendChild(div);
};

findArea(5, -2, displayResult);
