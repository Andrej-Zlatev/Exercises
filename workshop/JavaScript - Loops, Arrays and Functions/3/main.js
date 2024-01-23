// Make an <a> element in html which will lead to twitter.com in the same tab, and add an id="fb"
// to it.
// - In JavaScript check whether the link leads to facebook.com.
// - If it does lead to facebook.com, print in the console "The link leads to facebook".
// - If it doesn’t lead to facebook.com, then edit it to lead to facebook.com in a new tab, and print in
// the console "The link leads to facebook in a new tab".

const link = document.getElementById("fb");
if (link.getAttribute("href") === "https://www.facebook.com/") {
  console.log("The link leads to facebook");
} else {
  link.setAttribute("href", "https://www.facebook.com/");
  link.setAttribute("target", "_blank");
  console.log("This link leads to facebook in a new tab");
}
