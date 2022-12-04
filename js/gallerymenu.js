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
    body.classList.remove("light-theme");
    localStorage.setItem("light-theme", "disabled");
    lightNip.classList.remove("lightNip--turnOnOff");
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

// BACK TO TOP BUTTON ANIMATION
const buttonTop = function () {
  const btTargetElement = document.querySelector(".footer");
  const backTop = document.querySelector(".top__button");

  const bt = (entries) => {
    const [x] = entries;

    if (x.isIntersecting) backTop.classList.add("top__button--slideUp");
    else backTop.classList.remove("top__button--slideUp");
  };

  const bto = {
    root: null,
    rootMargin: "100px",
    threshold: 0.1,
  };

  const observerbt = new IntersectionObserver(bt, bto);
  observerbt.observe(btTargetElement);
};

buttonTop();

// GALLERY MENU MODAL
const modals = function () {
  const modal = document.querySelector(".modal");
  const modalImg = document.querySelector(".modalImg");
  const closeBtn = document.querySelector(".closeBtn");

  // IMAGE #1
  const openModal1 = function () {
    const openModal = document.querySelector(".img01");

    openModal.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = "/img/saturneats.jpg";
    });
  };
  openModal1();

  // IMAGE #2
  const openModal2 = function () {
    const openModal = document.querySelector(".img02");

    openModal.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = "/img/thenightmare.jpg";
    });
  };
  openModal2();

  // IMAGE #3
  const openModal3 = function () {
    const openModal = document.querySelector(".img03");

    openModal.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = "/img/medusaPPR.webp";
    });
  };
  openModal3();

  // IMAGE #4
  const openModal4 = function () {
    const openModal = document.querySelector(".img04");

    openModal.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = "/img/hegoat-1400w.jpg";
    });
  };
  openModal4();

  // IMAGE #5
  const openModal5 = function () {
    const openModal = document.querySelector(".img05");

    openModal.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = "/img/daggers.jpg";
    });
  };
  openModal5();

  // IMAGE #6
  const openModal6 = function () {
    const openModal = document.querySelector(".img06");

    openModal.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = "/img/severedheads.jpg";
    });
  };
  openModal6();

  // IMAGE #7
  const openModal7 = function () {
    const openModal = document.querySelector(".img07");

    openModal.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = "/img/faceofwar.jpg";
    });
  };
  openModal7();

  // IMAGE #8
  const openModal8 = function () {
    const openModal = document.querySelector(".img08");

    openModal.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = "/img/beheadingholofernes.jpg";
    });
  };
  openModal8();

  // IMAGE #9
  const openModal9 = function () {
    const openModal = document.querySelector(".img09");

    openModal.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = "/img/hell-600w.webp";
    });
  };
  openModal9();

  // IMAGE #10
  const openModal10 = function () {
    const openModal = document.querySelector(".img10");

    openModal.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = "/img/danteandvirgilinhell-600w.jpg";
    });
  };
  openModal10();

  // IMAGE #11
  const openModal11 = function () {
    const openModal = document.querySelector(".img11");

    openModal.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = "/img/lamour.jpg";
    });
  };
  openModal11();

  // IMAGE #12
  const openModal12 = function () {
    const openModal = document.querySelector(".img12");

    openModal.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = "/img/gatesofhell-600w.jpg";
    });
  };
  openModal12();

  // IMAGE #13
  const openModal13 = function () {
    const openModal = document.querySelector(".img13");

    openModal.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = "/img/witchesflight-600w.jpg";
    });
  };
  openModal13();

  // IMAGE #14
  const openModal14 = function () {
    const openModal = document.querySelector(".img14");

    openModal.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = "/img/ghostsontree-600w.jpg";
    });
  };
  openModal14();

  // IMAGE #15
  const openModal15 = function () {
    const openModal = document.querySelector(".img15");

    openModal.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = "/img/girldeathmask-600w.jpg";
    });
  };
  openModal15();

  // IMAGE #16
  const openModal16 = function () {
    const openModal = document.querySelector(".img16");

    openModal.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = "/img/meatman-700w.webp";
    });
  };
  openModal16();

  // IMAGE #17
  const openModal17 = function () {
    const openModal = document.querySelector(".img17");

    openModal.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = "/img/choppedarms.webp";
    });
  };
  openModal17();

  // IMAGE #18
  const openModal18 = function () {
    const openModal = document.querySelector(".img18");

    openModal.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = "/img/mythicflay-734w.jpg";
    });
  };
  openModal18();

  // IMAGE #19
  const openModal19 = function () {
    const openModal = document.querySelector(".img19");

    openModal.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = "/img/deathofmurattwo.jpg";
    });
  };
  openModal19();

  // IMAGE #20
  const openModal20 = function () {
    const openModal = document.querySelector(".img20");

    openModal.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = "/img/skeletoncig-600w.jpg";
    });
  };
  openModal20();

  // IMAGE #21
  const openModal21 = function () {
    const openModal = document.querySelector(".img21");

    openModal.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = "/img/allisvanity-600w.jpg";
    });
  };
  openModal21();

  // IMAGE #22
  const openModal22 = function () {
    const openModal = document.querySelector(".img22");

    openModal.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = "/img/ballerinadh-624w.jpg";
    });
  };
  openModal22();

  // IMAGE #23
  const openModal23 = function () {
    const openModal = document.querySelector(".img23");

    openModal.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = "/img/satanlegion-600w.webp";
    });
  };
  openModal23();

  // IMAGE #24
  const openModal24 = function () {
    const openModal = document.querySelector(".img24");

    openModal.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = "/img/tamarademon-606w.jpg";
    });
  };
  openModal24();

  const closeModal = function () {
    // BUTTON CLICK
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });

    // MODAL ESC KEY
    document.body.addEventListener("keydown", function (e) {
      if (e.key === "Escape") modal.style.display = "none";
    });

    // MODAL OVERLAY CLICK
    document.body.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  };
  closeModal();
};
modals();
