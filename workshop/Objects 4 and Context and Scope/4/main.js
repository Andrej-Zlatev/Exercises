// Exercise 04
// - Use the starter files for this exercise and see screenshot4 as a reference.
// - Allow the user to select one of the timezones from the dropdown.
// - Create a custom function updateClock that shows the current time in the selected
// timezone by the user

function getUser(userId, callback) {
  setTimeout(() => {
    callback({
      userId: userId,
      username: "John",
    });
  }, 1000);
}

getUser(1, function (callback) {
  console.log(callback);
});
