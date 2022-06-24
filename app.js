// setting date automatic
const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();
// toggle menu
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
bar.addEventListener("click", function () {
  if (bar) {
    nav.classList.add("active");
  }
});
close.addEventListener("click", function () {
  if (close) {
    nav.classList.remove("active");
  }
});
