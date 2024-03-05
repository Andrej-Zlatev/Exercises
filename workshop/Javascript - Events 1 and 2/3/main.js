// Exercise 03
// - There is a html starter file with 2 divs inside.
// - Write a JavaScript program where they both become opaque but the first div increases
// their size while the second div decreases its size (shrinks) upon mouse hover.
const divs = document.querySelectorAll(".divDisplay");

divs.forEach((div, index) => {
  div.addEventListener("mouseover", (event) => {
    event.target.style.opacity = "0.5";

    if (index === 0) {
      event.target.style.width = "500px";
      event.target.style.height = "500px";
    } else {
      event.target.style.width = "100px";
      event.target.style.height = "100px";
    }
  });

  div.addEventListener("mouseout", (event) => {
    event.target.style.opacity = "1";
    event.target.style.width = "300px";
    event.target.style.height = "300px";
  });
});
