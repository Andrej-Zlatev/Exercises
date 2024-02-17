// exercise I
// Make a clone of the image in the main-content (where it says Exercise I) and put it inside the sidebar. See how it's supposed to look like on the screenshot.
const imgClone = document.querySelector(".img-clone img");
const sidebar = document.querySelector(".sidebar");

const imgCloneSrc = imgClone.src;
const sidebarImgClone = document.createElement("img");
sidebarImgClone.src = imgCloneSrc;
sidebarImgClone.style.width = "100%";

sidebar.appendChild(sidebarImgClone);

// exercise II
// There's an array of tags below. Inside the index.html you will find the section where it says Exercise II, there is a div with a class of
// '.widget-sidebar-tags'. Iterate through the tags and show them as buttons with the following html structure
//  (<a href="#" class="btn btn-outline-secondary btn-sm mr-2 mb-2">Books</a>)
//  inside the '.widget-sidebar-tags' div. See the screenshot how they are supposed to look like.
let tags = [
  "Books",
  "Presentation",
  "Study",
  "Blog",
  "Teachers",
  "Courses",
  "Student Life",
  "Test",
  "Certifications",
  "Images",
  "Recent",
];

const widgets = document.querySelector(".widget-sidebar-tags");
tags.forEach((el) => {
  let linkBtn = document.createElement("a");
  linkBtn.classList.add(
    "btn",
    "btn-outline-secondary",
    "btn-sm",
    "mr-2",
    "mb-2"
  );
  linkBtn.textContent = el;
  widgets.appendChild(linkBtn);
});

// exercise III
// In the first sidebar widget (that's already done) there are bunch of links and in the main-content
// there is a main-content-widget that is hidden (display: none), where it says Exercise III.
// Get every odd link (1/3/5) and place that same link as a child of the main-content-widget,
//  don't re-create it from scratch (hint: innerHTML). After inserting all the links as children,
//  show the main-content-widget on the page (display: block)

const widgetsSidebar = document.querySelectorAll(
  ".widget-sidebar div.link-block"
);

const mainContentWidget = document.querySelector(".main-content-widget");
const widgetsArray = Array.from(widgetsSidebar);
const filteredWidgets = widgetsArray.filter((_, index) => index % 2 === 0);
filteredWidgets.forEach((el) => {
  const newWidget = document.createElement("div");
  newWidget.innerHTML = el.innerHTML;
  mainContentWidget.appendChild(newWidget);
  mainContentWidget.style.display = "block";
});

// exercise IV
// You are given an array of images. In html there is a carousel that is hidden (display: none), where it says Exercise IV. The carousel has no carousel-items inside the carousel-inner div. Your task is to iterate through the array of images and for every image create a new slide in the carousel. Make sure you put the active class on the first one only in order to make the carousel work properly. After inserting all the images as carousel slides show the carousel on the page (display: block).
let imgsArr = [
  "https://picsum.photos/id/1044/1280/720",
  "https://picsum.photos/id/1040/1280/720",
  "https://picsum.photos/id/1041/1280/720",
  "https://picsum.photos/id/1042/1280/720",
];

// Example of one carousel item (slide)
{
  /* <div class="carousel-item active">
    <img class="d-block w-100" src="https://picsum.photos/id/1044/1280/720" alt="First slide">
  </div> */
}
