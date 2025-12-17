const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const navbar = document.querySelector(".navbar");

// Mobile menu toggle
hamburger.addEventListener("click", () => {
  if (mobileMenu.style.right === "0px") {
    mobileMenu.style.right = "-250px";
  } else {
    mobileMenu.style.right = "0px";
  }
});

// Scroll event for navbar border
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});