// Exercise 5
// 1. In HTML, create a table with two columns: City and Population.
// 2. Using the cities object from our example (you can add your city as well), fill the table with as many
// rows as there are objects in the object.
// a. Try it first with Object.keys and Object.values
// b. Try it again with Object.entries

const cities = {
  Bitola: {
    population: 80000,
  },
  Skopje: {
    population: 500000,
  },
  Ohrid: {
    population: 60000,
  },
};

const tableEl = document.querySelector("table");

const headerRow = document.createElement("tr");

const cityHeader = document.createElement("th");
cityHeader.textContent = "City";
headerRow.appendChild(cityHeader);

const populationHeader = document.createElement("th");
populationHeader.textContent = "Population";
headerRow.appendChild(populationHeader);

tableEl.appendChild(headerRow);

Object.entries(cities).forEach(([city, data]) => {
  const dataRow = document.createElement("tr");

  const cityCell = document.createElement("td");
  cityCell.textContent = city;
  dataRow.appendChild(cityCell);

  const populationCell = document.createElement("td");
  populationCell.textContent = data.population;
  dataRow.appendChild(populationCell);

  tableEl.appendChild(dataRow);
});
