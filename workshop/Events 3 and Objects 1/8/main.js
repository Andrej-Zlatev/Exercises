// Exercise 08
// - There is a html starter file for this exercise.
// - Create a gallery of images where each image has associated tags or categories that are
// stored in an array of objects.
// - Implement filter buttons to display only images that match a certain category

const images = [
  { src: "../img/image1.jpg", tags: ["Rocky", "Desert"] },
  { src: "../img/image2.jpg", tags: ["Nature", "Forests"] },
  { src: "../img/image3.jpg", tags: ["Nature", "Lake"] },
  { src: "../img/image4.jpg", tags: ["Forests", "Mountains"] },
];

const gallery = document.querySelector("#gallery");
const filterButtons = document.querySelector("#filterButtons");

let tags = [];

images.forEach((img) => {
  img.tags.forEach((tag) => {
    if (!tags.includes(tag)) {
      tags.push(tag);
    }
  });
});

tags.forEach((tag) => {
  let button = document.createElement("button");
  button.innerHTML = tag;
  button.addEventListener("click", () => {
    gallery.innerHTML = "";
    let filteredImages = images.filter((img) => {
      if (img.tags.includes(tag)) {
        return true;
      }
      return false;
    });

    filteredImages.forEach((img) => {
      const image = document.createElement("img");
      image.src = img.src;
      image.classList.add("col-md-4", "mb-3");
      gallery.appendChild(image);
    });
  });

  filterButtons.appendChild(button);
});
