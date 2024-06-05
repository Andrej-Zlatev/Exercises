"use strict";
// interface playerInfo {
//   name: String;
//   num: Number;
// }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// const logPlayer = (player: playerInfo) => {
//   console.log(player.name, player.num);
// };
// logPlayer({ name: "Cristiano Ronaldo", num: 7 });
// let num = 7;
// num = "seven";
// Exercise I
// - Create two inputs in HTML and a button with text Add
// - In JavaScript create a function that will accept two parameters and simply returns
// the sum of those two parameters
// - Select the inputs and the button in javascript
// - Add event listener that will execute the add function on button click which as
// parameters will take the values from the inputs
// - Add the result of the function into the document
// const firstNum: HTMLInputElement | null = document.querySelector("#firstNum");
// const secondNum: HTMLInputElement | null = document.querySelector("#secondNum");
// const btn: HTMLButtonElement | null = document.querySelector("button");
// const sum = (a: number, b: number): number => {
//   return a + b;
// };
// btn?.addEventListener("click", () => {
//   if (firstNum && secondNum) {
//     const result = sum(Number(firstNum.value), Number(secondNum.value));
//     console.log(result);
//   }
// });
// console.log("test");
// interface fetchedData {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   address: {
//     street: string;
//     suite: string;
//     city: string;
//     zipcode: string;
//     geo: {
//       lat: string;
//       lng: string;
//     };
//   };
// }
// var tbody = document.querySelector("tbody");
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (data) {
//     data.forEach(function (user) {
//       var tr = document.createElement("tr");
//       var nameTd = document.createElement("td");
//       var emailTd = document.createElement("td");
//       var phoneTd = document.createElement("td");
//       nameTd.innerText = user.name;
//       emailTd.innerText = user.email;
//       phoneTd.innerText = user.phone;
//       tr.append(nameTd, emailTd, phoneTd);
//       tbody === null || tbody === void 0 ? void 0 : tbody.append(tr);
//     });
//   });
// Exercise II
// 15
// - Fetch all albums from https://jsonplaceholder.typicode.com/albums
// - In album container render card for each of the albums received from the endpoint
const albumContainer = document.querySelector(".container");
const renderCard = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch("https://jsonplaceholder.typicode.com/albums");
        if (!response.ok) {
            throw new Error("Error");
        }
        const data = yield response.json();
        if (albumContainer) {
            data.forEach((album) => {
                let cardElement = document.createElement("div");
                cardElement.className = "card";
                cardElement.innerHTML = `
      <p>Id: ${album.id}</p>
      <p>title: ${album.title}</p>
      <p>UserId: ${album.userId}</p>`;
                albumContainer.appendChild(cardElement);
            });
        }
        else {
            console.error("Container element not found");
        }
    }
    catch (error) {
        console.log(error);
    }
});
renderCard();
