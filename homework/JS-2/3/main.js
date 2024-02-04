// Task 3: Dynamic Table Generator
// Write a JavaScript program that prompts the user to enter two numbers: number of
// columns and number of rows. The program contains one function:
// generateTable(nrRows, nrColumns)
// which dynamically generates a simple HTML table with the specified number of columns
// and rows.

function generateTable(nrRows, nrColumns) {
  let table = document.createElement("table");

  table.style.borderCollapse = "collapse";
  table.style.border = "1px solid black";

  for (let i = 0; i < nrRows * nrColumns; i++) {
    let row = Math.floor(i / nrColumns);
    let col = i % nrColumns;

    if (col === 0) {
      table.insertRow();
    }

    let cell = table.rows[row].insertCell();

    cell.style =
      "border: 1px solid black; padding:10px; background-color: #a7a4a4;";
    cell.textContent = `Row ${row + 1}, Col ${col + 1}`;
  }

  document.body.appendChild(table);
}

let columns = parseInt(prompt("Enter the number of columns:"));
let rows = parseInt(prompt("Enter the number of rows:"));

generateTable(rows, columns);
