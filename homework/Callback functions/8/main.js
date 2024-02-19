const myBtn = document.querySelector("#myBtn");
function ping() {
  setTimeout(() => {
    pong();
  }, 1000);
  console.log("ping");
}

function pong() {
  console.log("pong");
}

const interval = setInterval(() => {
  ping();
}, 2000);

function clear() {
  clearInterval(interval);
}

myBtn.addEventListener("click", clear);
