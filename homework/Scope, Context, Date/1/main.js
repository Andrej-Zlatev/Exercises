const date = new Date();

const getCurrentMonth = (currentMonth) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months[currentMonth];
};

const result = getCurrentMonth(date.getMonth());
console.log(result);
