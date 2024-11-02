# midnightmacabre

#### Video Demo: https://youtu.be/VkH9TtBVIV0

#### Description: This is a website that celebrates horror culture. Movie reviews, TV show reviews, video game reviews, and blogging of weird, spooky, and horror related subjects. Get cozy and enjoy the horrific entertainment!!!. 🔪👻🩸😈💀👹👺🧌

For my final project, I decided to create a website that celebrates horror culture. There are 12 pages of spooktacular media, featuring mock horror movie reviews, T.V. show reviews, video game reviews, a blog section covering various macabre topics, and grim historical figures. There is also a gallery section full of dark artistry from legendary artists like Salvador Dali, Vincent van Ghogh, and Francisco De Goya to Francis Bacon, and Henry Fuseli.

As part of my project, I programmed a Snake inspired clone with a quirky, retro, and stylistic, horror twist using JavaScript and HTML5 video and audio elements. I learned a little bit about JavaScript logic, and wanted to further improve my JavaScript skills and expand on DOM manipulation, Web API's, like local storage, intersection observer, functions, Object Oriented Programming, loops, and conditionals amongst other JavaScript facets by building a mini game and implementing background music and sound effects into it, triggered by conditionals, and lexical evironment in a function.

I had to install node.js to use NPM (node package manager) to install packages from its registries. I used dev dependencies such as node-sass, PostCSS autoprefixer,live-server, and npm-run-all so that I could set up a script in a package.json file that allows me to "watch" for SASS/CSS changes, and automatically refresh the viewport without having to do it manually by clicking reload. Autoprefixer add prefixes like -moz-, -webkit- to your properties, so you don't miss anything you might need.

I learned a lot about CSS, topics such as custom properties which made manages color and typography changes easier, CSS resets for a more custom layout, display values like Flexbox, Grid for easier layout than using floats and clears, keyframe animations, transform value-properties, and Web Design principals like Typography, and design heirarchy. I decided not to use CSS frameworks like Bootstrap or Tailwind, because I wanted to dig deeper into the core of CSS and see what I could produce. However, I did incorporate SASS because I wanted to nest my CSS class selectors as I don't think nesting is natively possible in CSS yet.

#### HTML folder:

In this folder I have a total of 12 pages. Starting with the homepage/indexpage, which features an introduction of myself and my website, and a preview layout of the various media I have comprised the site out of. There is a movie page where I review and rate horror movies I have watched, as well as a T.V. show and video page that pretty much has the same layout and intention.

There is a gallery page where I got to use JavaScript DOM manipulation methods like addEventListener functions to implement overlays upon clicking on an image, I used CSS properties like blur() function to add a gaussian blur to the background overlay of an image cented on the viewport.

I debated using Bootstrap to add a caroussel to the homepage, but I ultimately decided to created a caroussel using only JavaScript. It was a bit difficult, because it took me a while to come up with the JavaScript logic to make the caroussel slide the images properly using functions, forEach loops, and the DOM.

I utilized CSS properties like transform: translateY(), and overflow: hidden to manipulate and hide image overflow, and create a "slide" effect triggered by clicking bloody hand images on the left and right side of the caroussel container. My intention in going for this approach was to learn more about JavaScript instead of taking the more convienient route by using Bootstrap at this point of my learning journey.

I used CSS to style the layout of "Bloodworm", the "Snake" inspired clone with a goofy, horror, style twist. I used borders and inset feature in box-shadow property to style the game screen border frames. I gave the outer borders a groove style, and the inner border a dashed style that produced a "Beetjuice" style effect, which I liked very much. I used Microsoft A.I. to generate a copyright free logo for the game screen, and CS50 duck image pulled from a google search to implement into the game. I also used Canva and took a pixel art background, and a retro pixel skull element from their catalog.

#### SASS folder:

This folder is comprised of SCSS pages that compile into native CSS files inside thier own created CSS file via your "script" instructions. In my package.json file, I had to instruct SASS in "script" to compile from a "pages/main.scss" file to a "css/style.css" file. Like I mention earlier, I only used SASS for the nesting feature, and didn't use @mixins or functions.

One of my favorite films is Hellraiser, the classic 1987 British horror film. I wanted to create something in CSS that resembled a puzzle box in the film called The Lament Configuration Box that summoned demonic biengs (Cenobites) from another dimension. I wanted to make a cube that rotated in different directions in a 3D rendered fashion using the transform property and the rotateX(), rotateY(), rotateZ(), translate3d() functions. rotateXYZ() functions allow for an element to be rotated in 3d enabled space thanks to the `transform-style: preserve-3d;` property value.

I had to first establish a div element that housed the cube associated with the `perspective` property via class selector. The idea was to give the cube a perspective that made certain areas of the cubes dimensions upon rotation (or the whole cube) look further away relative to the parent element that contains it, and on the unit number value that its given.

In order to achieve the likeness of The Lament Configuration Box on the cube, I had to search the web for illustrations of each of the box sides. I managed to find something, as you will see when in the video when I showcase the finished design. I had to create a parent element and assign it a class, in its class selector, I had to set a `position: relative` property and value so that I could rotate and translate children element images in a way that formed a 3D cube.

### Examples:

```
.cube {
position: relative;
width: 100%;
height: 100%;
transform-style: preserve-3d;
backface-visibility: hidden;
animation: spinCube 24000ms infinite ease-in-out;
}

.cube__face {
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: 0.03rem 0.03rem 2.5rem var(--color-primary);
    transition: box-shadow 1000ms ease-in;

    // CUBE FACE POSITION
    &--front {
      background-image: url(/img/hellcubeSide1b.png);
      transform: rotateY(0deg) translateZ(100px);
    }
    &--right {
      background-image: url(/img/hellcubeSide2b.png);
      transform: rotateY(90deg) translateZ(100px);
    }
    &--back {
      background-image: url(/img/hellcubeSide1a.png);
      transform: rotateY(180deg) translateZ(100px);
    }
    &--left {
      background-image: url(/img/hellcubeSide2a.png);
      transform: rotateY(-90deg) translateZ(100px);
    }
    &--top {
      background-image: url(/img/hellcubeSide3b.png);
      transform: rotateX(90deg) translateZ(100px);
    }
    &--bottom {
      background-image: url(/img/hellcubeSide3a.png);
      transform: rotateX(-90deg) translateZ(100px);
    }
  }

```

Then came the use of @keyframes animations that allowed me to bring the rotating Hell cube alive as you will see in the video demo.

```
// CUBE ROTATION
  @keyframes spinCube {
    0% {
      transform: translate3d(0, 0, 0) rotate3d(0, 0, 0, 0deg);
    }

    50% {
      transform: translate3d(0, 0, 0) rotateX(720deg) rotateY(720deg);
    }

    100% {
      transform: translate3d(0, 0, 0) rotateX(-720deg) rotateY(-720deg);
    }
  }

```

I ended up adding a box-shadow glow effect on the key by adding a blur and a red color, which you can see going into "dark mode" when you click on the skull icon light switch on the top-right of the homepage. I created that switch using `display: flex`, `flex-flow: column` and `transform: translateY()` to create a slide switch effect that slides up and down using `toggle`. I used a skull emoji as a child element inside a container.

#### IMG folder:

This folder contains too many images to count, but were necessary to accomplish my stylistic vision of Midnight Macabre. The "BLOODWORM" logo image in the Bloodworm game splash screen was A.I. generated using Microsoft Copilot, and CS50 duck image was plucked from the internet.

#### SOUNDS folder:

I only have two audio files I got from PIXABAY. An 8-bit rendition of Moonlight Sonata by Beethoven, and a "munching" sound effect that I used when the Bloodworm eats the CS50 duck.

#### .gitignore & package.json files:

The .gitignore file is simply a file created to add files and folders you want Git ignore before you commit your project changes, and optionally push into a remote repository like GitHub. The package.json file contains metadata relating to this project. It's also a file responsible for managing dependencies, and scripts that streamline your workflow.

#### JS files:

This folder holds 12 scripts. Each script holds JavaScript that's relevent to every single HTML page. I chose to have seperate JS scripts, instead of one huge wall of code in a single script, because I felt seperating them would make them easier to manage.

One of the biggest things I incorporated JavaScript into was the Bloodworm game. I learned the logic necessary to make certain objectives possible, and then I went from there, breaking the problem into smaller pieces and thinking of ways to make things possible.

I learned about Object Oriented Programming in JavaScript, and I applied those concepts to this mini project. I realized that OOP approach not only looked a bit cleaner than a standard function or Prototype property approach, but it was easier to navigate and address issues in the code. Overall, keeping track of the code base felt a little smoother because of encapsulation.

#### Examples:

```
"use strict";

class BloodWormGame {
  constructor() {
    // DEFINING HTML ELEMENTS (LOGO & INSTRUCTIONS) ON GAME SCREEN
    this.screen = document.querySelector(".game_screen");
    this.instructions = document.querySelector("#instruction_text");
    this.BWlogo = document.querySelector(".bloodworm-logo");

    // DEFINING GAME VARIABLE
    this.scoreEle = document.querySelector("#score");
    this.highScoreEle = document.querySelector("#highScore");
    this.highScore = 0;
    this.gridCells = 20;
    this.bloodWorm = [{ x: 10, y: 10 }];
    this.prey = this.generatePrey();
    this.direction = "right";
    this.gameInterval = null;
    this.gameSpeedDelay = 200;
    this.gameStart = false;
    this.bgMusic = new Audio("/sounds/8-bit-moonlight-sonata.mp3");
    this.eatFX = new Audio("/sounds/eatingsound.mp3");

    // EVENTLISTENER FOR KEYDOWN EVENT
    document.addEventListener("keydown", (e) => this.initSession(e));

    *ALL DEFINED ELEMENTS GO INSIDE THE CONSTRUCTOR FUNCTION INSIDE CLASS*
  }

   // DRAWS ELEMENTS TO THE GRID ("GAME SCREEN")
  draw() {
    this.screen.innerHTML = "";
    this.drawBloodWorm();
    this.drawPrey();
    this.updateScore();
  }

  // DRAWS BLOODWORM
  drawBloodWorm() {
    this.bloodWorm.forEach((segPos) => {
      const wormElement = this.createGameElem("div", "bloodWorm");
      this.setPos(wormElement, segPos);
      this.screen.appendChild(wormElement);
    });
  }

  ....MORE CODE
}

  *this KEYWORD REFERS TO THE OWNER OF THE METHOD (FUNCTION) IN THIS CASE BloodWormGame, THE NAME OF THE CLASS*

```

Compared to the standard declared function approach....

```
"use strict";

// DEFINING HTML ELEMENTS (LOGO & INSTRUCTIONS) ON GAME SCREEN
const screen = document.querySelector(".game_screen");
const instructions = document.querySelector("#instruction_text");
const BWlogo = document.querySelector(".bloodworm-logo");

// DEFINING GAME VARIABLES
const scoreEle = document.querySelector("#score");
const highScoreEle = document.querySelector("#highScore");
let highScore = 0;
let gridCells = 20;
let bloodWorm = [{ x: 10, y: 10 }];
let prey = generatePrey();
let direction = "right";
let gameInterval;
let gameSpeedDelay = 200;
let gameStart = false;
let bgMusic = new Audio("/sounds/8-bit-moonlight-sonata.mp3");
let eatFX = new Audio("/sounds/eatingsound.mp3");

// DRAWS ELEMENTS TO THE GRID ("GAME SCREEN")
function draw() {
  screen.innerHTML = "";
  drawBloodWorm();
  drawPrey();
  scoreUpate();
}

// DRAWS BLOODWORM
function drawBloodWorm() {
  bloodWorm.forEach((segPos) => {
    const wormElement = createGameElem("div", "bloodWorm");
    setPos(wormElement, segPos);
    board.appendChild(wormElement);
  });
}

...MORE CODE

```

The intro to the homepage (index.html) has three images translated and hidden on the -x and x axis of the viewport. When you scroll down the page, the Intersection Observer API intersects with a targeted element or elements that house the images at an established percentage set by the `threshold` property, and then in this case, the `classList` property is used to add a class that makes the images appear and translate to the center of the screen. The images go back to designated spots and then disappear again as you scroll past each one as you will see in the video demo. Below is a sample of the code I put together.

#### Example:

```
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

  ...MORE CODE
}

```

The `root` property of the object can an element you want to intersect with another element or it can be the whole viewport relative to the particular element you want to target with the Intersection Observer API. `rootMargin` property adds a margin to the element you want to intersect with that can be used for example as a means to get an event to occur a bit earlier upon intersection.

I finally decided to forego the urge to use Boostrap or Tailwind CSS frameworks for a carouselle slider, and decided to create it using JavaScript. It was harder than I thought, but once I put it together, it made sense. The intention was to learn more about JavaScript by not taking the easy route by using Bootstrap, and learning about the logic necessary to make the a functioning carouselle slider using vanilla JavaScript. Below is the JavaScript I put together to make this happen, and a brief explanation of how it works.

#### Example:

```
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

```

I used a functions expression with all HTML elements defined inside the function scope. `let curSlide = 0;` refers to the center of the slider. `const maxSlide = slides.length;` refers to the last image to the right of an arrangement, in this example, where the images are aligned on an x-axis side by side. The images overflow on the x-axis, and are hidden using `overflow-x: hidden` property value statement on the `html` (root) class selector in a SCSS file.

The `goToSlide` function takes elements selected by querySelectorAll() `const slides = document.querySelectorAll(".slide");` and uses a `forEach()` function to loop through the slides and for each slide it uses `style.transform` to translate the images on a x-axis to the left and into the center of a parent container. Using the iterator variable index position from the callback arrow function, and a string literal template, I combined 100 with the % symbol to address the percentage in the x-axis translation process.

```
slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`));

```

`keydown` event handlers detect the click event of bloody hand image buttons on each side of the slider container, which initiates the sliding of the elements housing the images as you will see in the video demo.

I don't like bright colors, so I initially decided to create Midnight Macabre using a dark color scheme. After thinking about it, and having seconds thoughts, I decided that I also wanted to add a light color scheme as an alternative so I decided to look into the local storage API `localStorage.getItem()`, and `localStorage.getItem()` to not only add two different color schemes, but also save the state you leave the website in before you call it a day.

#### Example:

```
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

```

`classList` is used to apply classes that change the state of elements and create changes in color schemes, and light switch "slide" animations. localStorage window object sets "light-theme" into memory upon click event action, and when you leave and return to the website, localStorage window object gets the stored state you last left the website in. Conditionals if statements are used to detect the the "enabled", and "disabled" state of the stored information into local storage, and checks to if there's a match to the "light-theme" CSS property values before properly initiating the `enableLightToggle` and `disableLightToggle` functions to make the color scheme changes.
