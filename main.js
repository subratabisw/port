/* ===== Typed JS ===== */
var typed = new Typed(".text", {
  strings: ["Frontend Developer", "Youtuber", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

/* ===== Mobile Menu Toggle ===== */
const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll("#navbar a");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

/* ===== Auto Close Menu on Click ===== */
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});

