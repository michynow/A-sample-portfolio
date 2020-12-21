import getWow from "./getWow.js";
const hamburgerCont = document.querySelector(".nav-menu__hamburger-container");
const hamburgerIcon = document.querySelector(".bar1");
const navMenu = document.querySelector(".nav-menu__links");
let isMenuEnabled = false;
function closeOpenNav() {
  if (!isMenuEnabled) {
    navMenu.style.marginLeft = "0";
    navMenu.style.opacity = "1";
    isMenuEnabled = true;
    hamburgerIcon.setAttribute("class", "toggle");
  } else {
    navMenu.style.marginLeft = "-1000px";
    hamburgerIcon.setAttribute("class", "bar1");
    navMenu.style.opacity = "0";
    isMenuEnabled = false;
  }
}
hamburgerCont.addEventListener("click", closeOpenNav);
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navMenu.style.marginLeft = "0";
    navMenu.style.opacity = "1";
    isMenuEnabled = true;
    links.forEach((link) => {
      link.removeEventListener("click", closeOpenNav);
    });
  } else if (window.innerWidth < 768) {
    navMenu.style.marginLeft = "-1000px";
    navMenu.style.opacity = "0";
    isMenuEnabled = false;
    links.forEach((link) => {
      link.addEventListener("click", closeOpenNav);
    });
  }
});
const links = document.querySelectorAll(".nav-menu__link");

//slick
$(document).ready(function () {
  $(".my-projects__slider").slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 10000,
    mobileFirst: true,
    dots: true,
  });
});
