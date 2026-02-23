let menuIcon = document.querySelector(".menu-icon");
let rightLinks = document.querySelector(".right-links");

menuIcon.addEventListener("click", function () {
  rightLinks.classList.toggle("open-icon");
});
