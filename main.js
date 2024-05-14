let leftMenu = document.querySelector(".left-nav-wrapper");
let hamburger = document.querySelector("#hamburger");
let centre = document.querySelector(".centerframe");

hamburger.addEventListener("click", () => {
  leftMenu.classList.toggle("left-nav-active");
  centre.classList.toggle("centre-move-active");
});

let searchIcon = document.querySelector("#search");
let inputBox = document.querySelector(".input-display");

searchIcon.addEventListener("click", () => {
  inputBox.classList.toggle("input-show");
});
