# midnightmacabre

#### Video Demo:

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

This folder is simply comprised of SCSS pages that compile into native CSS via your instructions. In my package.json file, I had to instruct SASS in "script" to compile from a "pages/main.scss" file to a "css/style.css" file. Like I mention earlier, I only used SASS for the nesting feature, and didn't use @mixins or functions.

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

#### IMG folder:

This folder contains too many images to count, but were necessary to accomplish my stylistic vision of Midnight Macabre.

#### SOUNDS folder:

I only have two audio files I got from PIXABAY. An 8-bit rendition of Moonlight Sonata by Beethoven, and a "munching" sound effect that I used when the Bloodworm eats the CS50 duck.

#### .gitignore & package.json files:

The .gitignore file is simply a file created to add files and folders you want Git ignore before you commit your project changes, and optionally push into a remote repository like GitHub. The package.json file contains metadata relating to this project. It's also a file responsible for managing dependencies, and scripts that streamline your workflow.

#### JS file:

This folder holds 12 scripts. Each script holds JavaScript that's relevent to every single HTML page. I chose to have seperate JS scripts, instead of one huge wall of code in a single script, because I felt seperating them would make them easier to manage.

One of the biggest things I incorporated JavaScript into was the Bloodworm game. I learned the logic necessary to make certain objectives possible, and then I went from there, breaking the problem into smaller pieces and thinking of ways to make things possible.

I learned about Object Oriented Programming in JavaScript, and I applied those concepts to this mini project. I realized that OOP approach not only looked cleaner than a Constructor Function, Prototype property approach, but it was easier to address issues, navigate, and keep track of the code.

#### Examples:

```
class BloodWormGame {
  constructor() {
    // DEFINING HTML ELEMENTS (LOGO & INSTRUCTIONS) ON GAME SCREEN
    this.screen = document.querySelector(".game_screen");
    this.instructions = document.querySelector("#instruction_text");
    this.BWlogo = document.querySelector(".bloodworm-logo");
    ....
  }

```

compared too....

```
class BloodWormGame {
  constructor() {
    // DEFINING HTML ELEMENTS (LOGO & INSTRUCTIONS) ON GAME SCREEN
    this.screen = document.querySelector(".game_screen");
    this.instructions = document.querySelector("#instruction_text");
    this.BWlogo = document.querySelector(".bloodworm-logo");
    ....

```
