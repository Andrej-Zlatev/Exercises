// const company = {
//   name: "ABC Corporation",
//   employees: {
//     "John Smith": {
//       position: "Manager",
//       department: "Sales",
//     },
//     "Emily Brown": {
//       position: "Engineer",
//       department: "Engineering",
//     },
//     "David Johnson": {
//       position: "Analyst",
//       department: "Finance",
//     },
//   },
// };

// Task: Find all employee names in the 'company' object
// Expected output: ["John Smith", "Emily Brown", "David Johnson"]

// const employeeNames = Object.keys(company.employees);
// console.log(employeeNames);

const menu = {
  appetizers: ["Salad", "Soup", "Bruschetta"],
  mains: ["Pasta", "Pizza", "Steak"],
  desserts: ["Tiramisu", "Cheesecake", "Gelato"],
};

// Task: Find all categories of dishes available in the 'menu' object
// Expected output: ["appetizers", "mains", "desserts"]

const dishes = Object.keys(menu);
dishes.forEach((dish) => {
  console.log(menu[dish]);
});
