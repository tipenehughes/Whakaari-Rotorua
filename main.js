// Background Image carousel

// Landing page section
const background = document.getElementById("home");

// Array of landing page images
const landingImg = [
    `
url("./img/background1.png") no-repeat center center fixed`,
    `
url("./img/background2.png") no-repeat center center fixed`,
    `
  url("./img/background3.png") no-repeat center center fixed`,
];

// Function to change landing images

// landingImg.forEach(function (img) {
//     new Image().src = img;
//     // caches images, avoiding white flash between background replacements
// });

let counter = 0;

function imgChange() {
    if (counter === landingImg.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    background.style.background = landingImg[counter];
    background.style.backgroundSize = "cover";
}

setInterval(imgChange, 6000);

// Whakaari Logo Home button
const homeBtn = document.getElementById("logoBtn");

homeBtn.addEventListener("click", () => {
    window.scrollTo(0, 0);
});

// Home page scroll to about button
const scrollDown = document.getElementById("scroll-down");
const aboutSection = document.getElementById("about");

scrollDown.addEventListener("click", () => {
    aboutSection.scrollIntoView();
});

// Home page see upcoming events button

const tourButton = document.getElementById("seeTours");
const tourSection = document.getElementById("tour");

tourButton.addEventListener("click", () => {
    tourSection.scrollIntoView();
});

// Navbar scroll
const navBar = document.getElementById("header");
const whakaari = document.getElementById("whakaari");
const rotorua = document.getElementById("rotorua");
const logoSpan = document.getElementById("logoSpan");

// Scroll Up function

function upAction() {
    navBar.classList.remove("header-down-action");
    whakaari.classList.remove("whakaari-down-action");
    rotorua.classList.remove("rotorua-down-action");
    logoSpan.classList.remove("span-down-action");
    navBar.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
}

function downAction() {
    navBar.classList.add("header-down-action");
    whakaari.classList.add("whakaari-down-action");
    rotorua.classList.add("rotorua-down-action");
    logoSpan.classList.add("span-down-action");
}

let scrollTop = function () {
    return window.scrollY;
};

let scrollState = 0;

// Primary scroll event function
let scrollDetect = function (down, up) {
    // Current scroll position
    let currentScroll = scrollTop();
    if (currentScroll > scrollState) {
        down();
    } else {
        up();
    }
    // Set previous scroll position
    scrollState = scrollTop();
};

window.addEventListener("scroll", function () {
    scrollDetect(downAction, upAction);
});

// Language selection drop down

const langContainer = document.getElementById("langContainer");
const langDropDown = document.querySelector(".drop-down-content");

langContainer.addEventListener("mouseenter", () => {
    langDropDown.style.display = "block";
    langContainer.style.backgroundColor = "rgba(61, 61, 61, 0.5)";
});

langContainer.addEventListener("mouseleave", () => {
    setTimeout(function () {
        langDropDown.style.display = "none";
        langContainer.style.backgroundColor = "rgba(61, 61, 61, 0.0)";
    }, 200);
});

// Language details change on click

const english = document.querySelectorAll('[lang="en"]');
const czech = document.querySelectorAll('[lang="cz"]');
const german = document.querySelectorAll('[lang="de"]');
const polish = document.querySelectorAll('[lang="pl"]');

const displayNone = {
    Cz: czech.forEach((i) => {
        i.style.display = "none";
    }),
    De: german.forEach((i) => {
        i.style.display = "none";
    }),
    Pl: polish.forEach((i) => {
        i.style.display = "none";
    }),
    En: english.forEach((i) => {
        i.style.display = "none";
    })
};

english.forEach((i) => {
    i.style.display = "block";
})

const langActive = document.querySelector(".langActive");
const langList = Array.from(document.querySelectorAll(".langList"));

langList.forEach((item) => {
    item.addEventListener("click", (e) => {
        let flagName = {
            flag: e.currentTarget.childNodes[1].src,
            name: e.currentTarget.childNodes[3].innerHTML,
        };
        e.currentTarget.childNodes[1].src = langActive.childNodes[1].src;
        e.currentTarget.childNodes[3].innerHTML =
            langActive.childNodes[3].innerHTML;

        langActive.childNodes[1].src = flagName.flag;
        langActive.childNodes[3].innerHTML = flagName.name;

        const displayNone = {
            Cz: czech.forEach((i) => {
                i.style.display = "none";
            }),
            De: german.forEach((i) => {
                i.style.display = "none";
            }),
            Pl: polish.forEach((i) => {
                i.style.display = "none";
            }),
            En: english.forEach((i) => {
                i.style.display = "none";
            })
        };

        if (langActive.childNodes[1].src.includes("english")) {
            displayNone.Cz;
            displayNone.De;
            displayNone.Pl;    
            english.forEach((i) => {
                i.style.display = "block"
            });
        } else if (langActive.childNodes[1].src.includes("czech")) {
            
            displayNone.En;
            displayNone.De;
            displayNone.Pl;
            czech.forEach((i) => {
                i.style.display = "block"
            });
        } else if (langActive.childNodes[1].src.includes("german")) {
            displayNone.Cz;
            displayNone.De;
            displayNone.Pl;
            german.forEach((i) => {
                i.style.display = "block"
            });
        } else if (langActive.childNodes[1].src.includes("polish")) {
            displayNone.En;
            displayNone.De;
            displayNone.Cz;
            polish.forEach((i) => {
                i.style.display = "block"
            });
        }
    });
});

// Change page language

// const english = document.querySelector('[lang="en"]');
// const czech = document.querySelector('[lang="cz"]');

// czech.style.display = "none";

// if (langActive.childNodes[1].src.includes("english")) {
//     english.style.display = "block";
// } else if (langActive.childNodes[1].src.includes("english")) {
//     english.style.display = "none";
//     czech.style.display = "block";
// }

// About section image carousel

const carouselSlide = document.getElementById("carouselSlide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let sliderCounter = 1;

const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + -size * sliderCounter + "px)";

// Carousel Functions

function nextImage() {
    carouselSlide.style.transition =
        "transform 0.6s cubic-bezier(.8,0,.55,.94)";
    sliderCounter++;
    carouselSlide.style.transform =
        "translateX(" + -size * sliderCounter + "px)";
}

function previousImage() {
    carouselSlide.style.transition =
        "transform 0.6s cubic-bezier(.8,0,.55,.94)";
    sliderCounter--;
    carouselSlide.style.transform =
        "translateX(" + -size * sliderCounter + "px)";
}

function slideMove() {
    if (carouselImages[sliderCounter].id === "firstClone") {
        carouselSlide.style.transition = "none";
        sliderCounter = carouselImages.length - 2;
        carouselSlide.style.transform =
            "translateX(" + -size * sliderCounter + "px)";
    }
    if (carouselImages[sliderCounter].id === "lastClone") {
        carouselSlide.style.transition = "none";
        sliderCounter = carouselImages.length - sliderCounter;
        carouselSlide.style.transform =
            "translateX(" + -size * sliderCounter + "px)";
    }
}

function slideHover() {
    // Adding hover classes
    if (carouselImages[sliderCounter - 1].classList !== "prev-image") {
        carouselImages[sliderCounter - 1].classList.add("prev-image");
    }
    if (carouselImages[sliderCounter + 1].classList !== "next-image") {
        carouselImages[sliderCounter + 1].classList.add("next-image");
    }
    if (carouselImages[sliderCounter - 1].classList.contains("next-image")) {
        carouselImages[sliderCounter - 1].classList.remove("next-image");
    }
    if (carouselImages[sliderCounter + 1].classList.contains("prev-image")) {
        carouselImages[sliderCounter + 1].classList.remove("prev-image");
    }
    // Removing hover classes from current image

    carouselImages[sliderCounter].className = "";
    // carouselImages[sliderCounter].nextElementSibling.addEventListener('click', nextImage);
    // carouselImages[sliderCounter].previousElementSibling.addEventListener('click', previousImage);
}

// Event listeners

nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", previousImage);

carouselSlide.addEventListener("transitionend", () => {
    slideMove();
    slideHover();
});

// Hover transitions for upcoming events

// const tourRows = document.querySelectorAll(".tour-item");

// const transparent = 'url("./img/transparent.png") no-repeat center center';

// tourRows[0].addEventListener("mouseover", () => {
//     tourRows[0].style.background =
//         'url("./img/events.png") no-repeat center center';
// });
// tourRows[0].addEventListener("mouseout", () => {
//     tourRows[0].style.background = transparent;
// });
