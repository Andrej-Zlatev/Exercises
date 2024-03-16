// Exercise 06
// - There is a html starter file for this exercise.
// - Collect the information from the form: name, email and short bio.
// - When the user presses Submit, display this information on the page in a card below the
// input fields.
// - Store the information in a JS object.
// - Use the following style for display:
// ○ <div class="card">
// ○ <div class="card-body">
// ○ <h3 class="card-title">${profile.name}</h3>
// ○ <p class="card-text">Email: ${profile.email}</p>
// ○ <p class="card-text">Bio: ${profile.bio}</p>
// ○ </div>
// ○ </div>

const formEl = document.getElementById("userForm");
const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const bioEl = document.getElementById("bio");
const profileDisplayEl = document.getElementById("profileDisplay");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const person = {
    personName: nameEl.value,
    email: emailEl.value,
    bio: bioEl.value,
  };
  profileDisplayEl.innerHTML = `
  <div class="card">
  <div class="card-body">
  <h3 class="card-title">${person.personName}</h3>
  <p class="card-text">Email: ${person.email}</p>
  <p class="card-text">Bio: ${person.bio}</p>
  </div>
  </div>
  `;
});
