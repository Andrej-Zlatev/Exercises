// Exercise 4:
// Define a function called fetchData that simulates fetching data from an API.
//fetchData should take a URL and a callback function. Inside fetchData,
//simulate a delay of 2 seconds using setTimeout,
// and then execute the callback function with the fetched data (you can use dummy data for this exercise).

// function fetchData(url, cb) {
//   setTimeout(() => {
//     cb(url);
//   }, 2000);
// }

// function callBack(url) {
//   console.log(`The url is ${url}`);
// }

// fetchData("www.nekojastrana.com", callBack);

function fetchData(url, cb) {
  // Simulate fetching data from an API
  setTimeout(() => {
    const data = { url: url };
    cb(data);
  }, 2000);
}

function callBack(data) {
  console.log("Data fetched:", data);
}

fetchData("www.nekojastrana.com", callBack);
