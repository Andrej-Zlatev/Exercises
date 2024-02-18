document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "./images/image1.jpg",
    "./images/image2.jpg",
    "./images/image3.jpg",
  ];

  const imgEl = document.getElementById("slideshow-img");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  let currentIndex = 0;

  function uploadImg() {
    imgEl.src = images[currentIndex];
    checkButtons();
  }

  function checkButtons() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === images.length - 1;
  }

  function nextImg() {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      uploadImg();
    }
  }

  function prevImg() {
    if (currentIndex > 0) {
      currentIndex--;
      uploadImg();
    }
  }

  function arrowEvent(event) {
    if (event.key === "ArrowRight") {
      nextImg();
    } else if (event.key === "ArrowLeft") {
      prevImg();
    }
  }
  nextBtn.addEventListener("click", nextImg);
  prevBtn.addEventListener("click", prevImg);

  document.addEventListener("keydown", arrowEvent);
  uploadImg();
});
