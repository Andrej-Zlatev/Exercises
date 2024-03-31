const date = new Date();

// const getCurrentMonth = (currentMonth) => {
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   return months[currentMonth];
// };

// const result = getCurrentMonth(date.getMonth());
// console.log(result);

function isWeekend(day) {
  if (day === 6 || day === 0) {
    console.log("It is a weekend");
  } else {
    console.log("It is not a weekend");
  }
}

isWeekend(date.getDay());
