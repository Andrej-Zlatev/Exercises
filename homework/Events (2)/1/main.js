// function onLoad() {
//   alert("Welcome!");
// }
// function onUnload(event) {
//   // this is the only way this event works, alerts/messages are ignored.
//   event.returnValue = "Are you sure you want to leave this page?";
//   return true;
// }
// window.addEventListener("load", onLoad);
// window.addEventListener("beforeunload", onUnload);

// Exercise I
// 1. In CSS, give the body height 10000vh.
// 2. Define a function onScroll and attach it on a ‘scroll’ event on the window.
// 3. Inside the ‘scroll’ event you have access to the window.scrollY property which gives you the exact
// position of the page you are at.
// 4. Using the window.scrollY check if you have scrolled:
// a) past 1000px on the page, and if you had, color the body red.
// b) otherwise, color the body green.

const onScroll = () => {
  document.body.style.backgroundColor = window.scrollY > 1000 ? "red" : "green";
};

window.addEventListener("scroll", onScroll);
