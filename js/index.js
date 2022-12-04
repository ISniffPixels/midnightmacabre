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

const homePage = function () {
  // INTRO PARAGRAPH TRANSITION
  const pIntro = document.querySelector(".intro--1");

  const para = (entries) => {
    const [x] = entries;
    if (x.isIntersecting) x.target.classList.add("intro--1--appear");
    else x.target.classList.remove("intro--1--appear");
  };

  const pg = {
    root: null,
    rootMargin: "90px",
    threshold: 0.1,
  };

  const observerp1 = new IntersectionObserver(para, pg);
  observerp1.observe(pIntro);

  // INTRO PARAGRAPH TRANSITION #2
  const pIntro2 = document.querySelector(".intro--2");

  const para2 = (entries) => {
    const [x] = entries;
    if (x.isIntersecting) x.target.classList.add("intro--2--appear");
    else x.target.classList.remove("intro--2--appear");
  };

  const pg2 = {
    root: null,
    rootMargin: "90px",
    threshold: 0.1,
  };

  const observerp2 = new IntersectionObserver(para2, pg2);
  observerp2.observe(pIntro2);

  // IMAGE + TEXT TRANSITION #1

  // IMG #1
  const imgIntro1 = document.querySelector(".img--1");

  const img1 = (entries) => {
    const [x] = entries;
    if (x.isIntersecting) x.target.classList.add("img--1--appear");
    else x.target.classList.remove("img--1--appear");
  };

  const imgs1 = {
    root: null,
    rootMargin: "90px",
    threshold: 1,
  };

  const observer1 = new IntersectionObserver(img1, imgs1);
  observer1.observe(imgIntro1);

  // TEXT #1
  const txtIntro1 = document.querySelector(".txt--1");

  const txt1 = (entries) => {
    const [x] = entries;
    if (x.isIntersecting) x.target.classList.add("txt--1--appear");
    else x.target.classList.remove("txt--1--appear");
  };

  const txts1 = {
    root: null,
    rootMargin: "90px",
    threshold: 1,
  };

  const observer2 = new IntersectionObserver(txt1, txts1);
  observer2.observe(txtIntro1);

  // IMAGE + TEXT TRANSITION #2

  // IMG #2
  const imgIntro2 = document.querySelector(".img--2");

  const img2 = (entries) => {
    const [x] = entries;
    if (x.isIntersecting) x.target.classList.add("img--2--appear");
    else x.target.classList.remove("img--2--appear");
  };

  const imgs2 = {
    root: null,
    rootMargin: "90px",
    threshold: 1,
  };

  const observer3 = new IntersectionObserver(img2, imgs2);
  observer3.observe(imgIntro2);

  // TEXT #2
  const txtIntro2 = document.querySelector(".txt--2");

  const txt2 = (entries) => {
    const [x] = entries;
    if (x.isIntersecting) x.target.classList.add("txt--2--appear");
    else x.target.classList.remove("txt--2--appear");
  };

  const txts2 = {
    root: null,
    rootMargin: "90px",
    threshold: 1,
  };

  const observer4 = new IntersectionObserver(txt2, txts2);
  observer4.observe(txtIntro2);

  // IMAGE + TEXT TRANSITION #3

  // IMG #3
  const imgIntro3 = document.querySelector(".img--3");

  const img3 = (entries) => {
    const [x] = entries;
    if (x.isIntersecting) x.target.classList.add("img--3--appear");
    else x.target.classList.remove("img--3--appear");
  };

  const imgs3 = {
    root: null,
    rootMargin: "90px",
    threshold: 1,
  };

  const observer5 = new IntersectionObserver(img3, imgs3);
  observer5.observe(imgIntro3);

  // TEXT #3
  const txtIntro3 = document.querySelector(".txt--3");

  const txt3 = (entries) => {
    const [x] = entries;
    if (x.isIntersecting) x.target.classList.add("txt--3--appear");
    else x.target.classList.remove("txt--3--appear");
  };

  const txts3 = {
    root: null,
    rootMargin: "90px",
    threshold: 1,
  };

  const observer6 = new IntersectionObserver(txt3, txts3);
  observer6.observe(txtIntro3);

  // SLIDER ANIMATION
  const slider = function () {
    const slides = document.querySelectorAll(".slide");
    const btnRight = document.querySelector(".slider__container--btn--right");
    const btnLeft = document.querySelector(".slider__container--btn--left");
    const dotContainer = document.querySelector(".carousel-clickies");

    let curSlide = 0;
    const maxSlide = slides.length;

    // FUNCTIONS
    const goToSlide = function (slide) {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
      );
    };
    goToSlide(0);

    const createClickies = function () {
      slides.forEach((_, i) => {
        dotContainer.insertAdjacentHTML(
          "beforeend",
          `<div class="clicky" data-slide="${i}">${i + 1}</div>`
        );
      });
    };
    createClickies();

    const activeClicky = function (slide) {
      document
        .querySelectorAll(".clicky")
        .forEach((clicky) => clicky.classList.remove("clicky--active"));

      document
        .querySelector(`.clicky[data-slide="${slide}"]`)
        .classList.add("clicky--active");
    };
    activeClicky(0);

    const clickies = function (e) {
      if (e.target.classList.contains("clicky")) {
        const { slide } = e.target.dataset;
        goToSlide(slide);
        activeClicky(slide);
      }
    };

    const nextSlide = function () {
      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }

      goToSlide(curSlide);
      activeClicky(curSlide);
    };

    const prevSlide = function () {
      if (curSlide === 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }

      goToSlide(curSlide);
      activeClicky(curSlide);
    };

    // EVENT HANDLERS
    btnRight.addEventListener("click", nextSlide);
    btnLeft.addEventListener("click", prevSlide);
    dotContainer.addEventListener("click", clickies);

    // CHANGING SLIDES USING ARROWKEYS
    document.addEventListener("keydown", function (e) {
      e.key === "ArrowLeft" && prevSlide();
      e.key === "ArrowRight" && nextSlide();
    });
  };

  slider();

  // BACK TO TOP BUTTON ANIMATION
  const btTargetElement = document.querySelector(".top__button--container");
  const backTop = document.querySelector(".top__button");

  const bt = (entries) => {
    const [x] = entries;
    if (x.isIntersecting) backTop.classList.add("top__button--slideUp");
    else backTop.classList.remove("top__button--slideUp");
  };

  const bto = {
    root: null,
    rootMargin: "400px",
    threshold: 0.1,
  };

  const observerbt = new IntersectionObserver(bt, bto);
  observerbt.observe(btTargetElement);
};

homePage();
