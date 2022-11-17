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

// LIGHT SWITCH
const lightSwitch = function () {
  const lightSwitch = document.querySelector(".lightSwitch");
  const lightNip = document.querySelector(".lightNip");
  const switchOnOff = document.querySelector(".switchLabel");
  const currentTheme = localStorage.getItem("theme");

  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  if (currentTheme == "dark") {
    document.body.classList.toggle("dark-theme");
    lightNip.classList.remove("lightNip--turnOnOff");
    switchOnOff.textContent = "DARK";
  } else if (currentTheme == "light") {
    document.body.classList.toggle("light-theme");
    lightNip.classList.add("lightNip--turnOnOff");
    switchOnOff.textContent = "LIGHT";
  }

  const Switch = function () {
    lightNip.classList.toggle("lightNip--turnOnOff");

    lightNip.classList.contains("lightNip--turnOnOff")
      ? (switchOnOff.textContent = "LIGHT")
      : (switchOnOff.textContent = "DARK");

    if (prefersDarkScheme.matches) {
      document.body.classList.toggle("light-theme");
      var theme = document.body.classList.contains("light-theme")
        ? "light"
        : "dark";
    } else {
      document.body.classList.toggle("dark-theme");
      var theme = document.body.classList.contains("dark-theme")
        ? "dark"
        : "light";
    }
    localStorage.setItem("theme", theme);
  };

  lightSwitch.addEventListener("click", Switch);
};

lightSwitch();

const buttonTop = function () {
  // BACK TO TOP BUTTON ANIMATION
  const btTargetElement = document.querySelector(".top__button--container");
  const backTop = document.querySelector(".top__button");

  const bt = (entries) => {
    const [x] = entries;

    if (x.isIntersecting) backTop.classList.add("top__button--slideUp");
    else backTop.classList.remove("top__button--slideUp");
  };

  const btt = {
    root: null,
    rootMargin: "15000px",
    threshold: 0.1,
  };

  const observerbt = new IntersectionObserver(bt, btt);
  observerbt.observe(btTargetElement);
};

buttonTop();
