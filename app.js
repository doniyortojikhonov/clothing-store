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

// Single Product item slider
let mainImg = document.getElementById("mainImg");
let smallImg = document.querySelectorAll(".small-img");

smallImg.forEach(function (item) {
  item.addEventListener("click", function () {
    mainImg.src = item.src;
  });
});

const allProducts = document.querySelectorAll("#product1 .pro-container .pro");
allProducts.forEach(function (product) {
  product.addEventListener("click", function () {
    window.location.href = "sproduct.html";
  });
});
