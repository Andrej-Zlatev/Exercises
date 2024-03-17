// Exercise 10
// - There is a html starter file for this exercise.
// - Create a simple currency converter application.
// - In the starter file, there is an object that stores the different currencies rates relative to a
// base currency.
// - Allow the user to input an amount, select a currency to convert from and to and display
// the converted amount.

const currencyRates = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.75,
  // Add other currency rates relative to the base currency (USD)
};

const convertButton = document.querySelector("#convertButton");
const result = document.querySelector("#result");
const amount = document.querySelector("#amount");
const fromCurrency = document.querySelector("#fromCurrency");
const toCurrency = document.querySelector("#toCurrency");

convertButton.addEventListener("click", () => {
  const amountInBase = +amount.value / currencyRates[fromCurrency.value];
  const resultAmount = amountInBase * currencyRates[toCurrency.value];

  result.innerHTML = resultAmount.toFixed(2);
});
