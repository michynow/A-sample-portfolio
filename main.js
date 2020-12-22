//slick
$(function () {
  new WOW().init();
  $(".my-projects__slider").slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 10000,
    mobileFirst: true,
    dots: true,
  });
  const $hamburgerCont = $(".nav-menu__hamburger-container");
  const $hamburgerIcon = $(".hamburger-bar1");
  const $navMenu = $(".nav-menu__links");
  const $width = $(window).width();
  let $isMenuEnabled = false;
  function closeOpenNav() {
    if (!$isMenuEnabled) {
      $navMenu.toggleClass("nav-menu__links--open nav-menu__links");
      $hamburgerIcon.toggleClass("nav-menu--open hamburger-bar1");
      $isMenuEnabled = true;
    } else {
      $navMenu.toggleClass("nav-menu__links nav-menu__links--open");
      $hamburgerIcon.toggleClass("hamburger-bar1 nav-menu--open");
      $isMenuEnabled = false;
    }
  }
  $hamburgerCont.on("click", closeOpenNav);
  const $links = $(".nav-menu__link");
  $(window).on("resize", function () {
    if ($width > 768) {
      $navMenu.attr("class", "nav-menu__links");
      $isMenuEnabled = true;
      $links.off("click", closeOpenNav);
    } else if ($width < 768) {
      $navMenu.attr("class", "nav-menu__links");
      $hamburgerIcon.attr("class", "hamburger-bar1");
      $isMenuEnabled = false;
    }
  });
  $links.on("click", function () {
    if ($width < 768) {
      $navMenu.attr("class", "nav-menu__links");
      $hamburgerIcon.attr("class", "hamburger-bar1");
    }
  });
});
