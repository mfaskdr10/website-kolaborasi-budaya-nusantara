const navMenu = document.getElementById("nav-menu");
const hamburger = document.getElementById("hamburger");

const hamburgerClick = hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("navbar").classList.add("fixed");
      document.getElementById("hero-container").style.marginTop = "120px";
      document.getElementById("hero-container").style.transition = "all 1s";
      navMenu.style.top = "6.5rem";
    } else {
      navMenu.style.top = "5.5rem";
      document.getElementById("navbar").classList.remove("fixed");
      document.getElementById("hero-container").style.marginTop = "0";
    }
  });
});
