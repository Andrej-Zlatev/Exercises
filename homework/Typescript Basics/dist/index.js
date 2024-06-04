"use strict";
// interface playerInfo {
//   name: String;
//   num: Number;
// }
var tbody = document.querySelector("tbody");
fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (res) {
    return res.json();
})
    .then(function (data) {
    data.forEach(function (user) {
        var tr = document.createElement("tr");
        var nameTd = document.createElement("td");
        var emailTd = document.createElement("td");
        var phoneTd = document.createElement("td");
        nameTd.innerText = user.name;
        emailTd.innerText = user.email;
        phoneTd.innerText = user.phone;
        tr.append(nameTd, emailTd, phoneTd);
        tbody === null || tbody === void 0 ? void 0 : tbody.append(tr);
    });
});
