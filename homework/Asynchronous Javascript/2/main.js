// Exercise 2
// 1. Using the Fetch API fetch the users from this endpoint https://randomuser.me/api/?results=10
// 2. Create cards for each user, displaying image, full name, phone and email.
// 3. Create “Show more” button to load additional 10 new users

let currentProfiles = 2;
const getUsers = () => {
  fetch(`https://randomuser.me/api/?results=${currentProfiles}`)
    .then((res) => res.json())
    .then((data) => {
      const content = document.getElementById("content");
      content.innerHTML = "";
      data.results.forEach((el) => {
        let img = document.createElement("img");
        img.src = `${el.picture.large}`;
        content.appendChild(img);
        let fullName = document.createElement("p");
        fullName.innerText = `${el.name.first} ${el.name.last}`;
        content.appendChild(fullName);
        let info = document.createElement("p");
        info.innerText = `Phone: ${el.phone} , Email:  ${el.email}`;
        content.appendChild(info);
      });
    });
};

getUsers();

const showMoreProfiles = () => {
  currentProfiles += 2;
  getUsers();
};

const showMoreBtn = document.getElementById("showMore");

showMoreBtn.addEventListener("click", showMoreProfiles);
