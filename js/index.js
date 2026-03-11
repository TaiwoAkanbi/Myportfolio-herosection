let menuIcon = document.querySelector(".menu-icon");
let rightLinks = document.querySelector(".right-links");

menuIcon.addEventListener("click", function () {
  rightLinks.classList.toggle("open-icon");
});

let links = document.querySelectorAll(".nav-link");

links.forEach((link) => {
  link.onclick = function () {
    links.forEach((l) => l.classList.remove("clicked"));

    this.classList.add("clicked");
  };
});

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been received.");
  form.reset();
});
