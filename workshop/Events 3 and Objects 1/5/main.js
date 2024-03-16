// Exercise 05
// - There is a html starter file for this exercise.
// - Create an image carousel with auto-play and pause functionality.
// - Each images automatically switches every 5 seconds.
// - Include buttons to manually switch to the next or the previous image.
// - Include a button to pause/resume the auto-play feature

const prevBtn = document.getElementById("prevButton");
const pauseBtn = document.getElementById("pausePlayButton");
const nextBtn = document.getElementById("nextButton");
const carouselImg = document.getElementById("carouselImage");

const images = [
  "../img/image1.jpg",
  "../img/image2.jpg",
  "../img/image3.jpg",
  "../img/image4.jpg",
];

let currentImg = 0;
let slideshow;

const autoSlideShow = () => {
  carouselImg.src = images[currentImg];
  currentImg = (currentImg + 1) % images.length; // Increment currentImg and loop back to 0 when it reaches the end
};

slideshow = setInterval(autoSlideShow, 2000);

let pauseSlideshow = () => {
  if (slideshow) {
    clearInterval(slideshow);
    slideshow = null; // Set slideshow to null to indicate that it's paused
    pauseBtn.textContent = "Play"; // Change button text to "Play"
  } else {
    slideshow = setInterval(autoSlideShow, 2000);
    pauseBtn.textContent = "Pause"; // Change button text to "Pause"
  }
};

let nextImage = () => {
  autoSlideShow();
  clearInterval(slideshow);
};

let prevImage = () => {
  currentImg--;
  if (currentImg < 0) {
    currentImg = images.length - 1;
  }
  clearInterval(slideshow);
  carouselImg.src = images[currentImg];
};

prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);
pauseBtn.addEventListener("click", pauseSlideshow);
