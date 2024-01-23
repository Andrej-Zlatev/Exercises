// - Make a div element in html with a class "cont".
// - Add a <p> element inside with a class of "text1" and write a text inside it "I am text created from
// the beginning".
// - In JavaScript make a new paragraph element with a text: "I am text created dynamically" and
// append it inside the div.
// - Add text inside the first paragraph (the one you created in html) which says: "added text" and
// change the color of the whole text inside that paragraph to green

const newP = document.createElement("p");
const myDiv = document.querySelector(".cont");
const firstP = document.querySelector(".text1");

newP.textContent = "I am text created dynamically";
myDiv.appendChild(newP);
firstP.textContent += ` added text`;
firstP.style.color = "green";
