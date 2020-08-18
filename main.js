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

// About section image carousel

const size = carouselImages[0].clientWidth;

// Flickity

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});