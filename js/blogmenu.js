"use strict";

//MOBILE MENU MODAL
const mobileMenu = function () {
  const menuMobile = document.querySelector(".menuMobile");
  const menuModal = document.querySelector(".menuModal");
  const btnBar = document.querySelector(".bar");
  const mobileMenuModal = document.querySelector(".menuModal__nav");

  const mobileMenuOpen = function () {
    menuModal.classList.toggle("menuModal--modalCover");
    mobileMenuModal.classList.toggle("menuModal__nav--menuFadeIn");
  };

  const buttonClose = function () {
    btnBar.classList.toggle("bar--Close");
  };

  menuMobile.addEventListener("click", mobileMenuOpen);
  menuMobile.addEventListener("click", buttonClose);
};

mobileMenu();

// ENABLE LIGHT TOGGLE
const lights = function () {
  const lightSwitch = document.querySelector(".lightSwitch");
  const lightNip = document.querySelector(".lightNip");
  let lightMode = localStorage.getItem("light-theme");
  const body = document.querySelector("body");

  const enableLightToggle = function () {
    lightNip.classList.add("lightNip--turnOnOff");
    body.classList.add("light-theme");
    localStorage.setItem("light-theme", "enabled");
  };

  const disableLightToggle = function () {
    lightNip.classList.remove("lightNip--turnOnOff");
    body.classList.remove("light-theme");
    localStorage.setItem("light-theme", "disabled");
  };

  if (lightMode === "enabled") {
    enableLightToggle();
  }

  const checkLightMode = function (e) {
    lightMode = localStorage.getItem("light-theme"); // UPDATE LIGHT-MODE WHEN CLICKED
    if (lightMode === "disabled") {
      enableLightToggle();
    } else {
      disableLightToggle();
    }
  };

  lightSwitch.addEventListener("click", checkLightMode);
};
lights();

const buttonTop = function () {
  // BACK TO TOP BUTTON ANIMATION
  const btTargetElement = document.querySelector(".footer");
  const backTop = document.querySelector(".top__button");

  const bt = (entries) => {
    const [x] = entries;

    if (x.isIntersecting) backTop.classList.add("top__button--slideUp");
    else backTop.classList.remove("top__button--slideUp");
  };

  const btt = {
    root: null,
    rootMargin: "100px",
    threshold: 0.1,
  };

  const observerbt = new IntersectionObserver(bt, btt);
  observerbt.observe(btTargetElement);
};

buttonTop();
