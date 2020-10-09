// Landing image preload to avoid flashing between images

function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function () {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        };
        list.push(img);
        img.src = array[i];
    }
}

preloadImages([
    "./img/background1.png",
    "./img/background2.png",
    "./img/background3.png",
]);

// Landing page image carousel

const landingImg = [
    "./img/background1.png",
    "./img/background2.png",
    "./img/background3.png",
];

const secs = 8;
const background = document.getElementById("home");

function backgroundSequence() {
    window.clearTimeout();
    let k = 0;
    for (i = 0; i < landingImg.length; i++) {
        setTimeout(function () {
            background.style.background =
                "url(" + landingImg[k] + ") no-repeat center center fixed";
            background.style.backgroundSize = "cover";
            if (k + 1 === landingImg.length) {
                setTimeout(function () {
                    backgroundSequence();
                }, secs * 1000);
            } else {
                k++;
            }
        }, secs * 1000 * i);
    }
}
backgroundSequence();

// Whakaari Logo Home button
const homeBtn = document.querySelectorAll(".logoBtn");

for (let i = 0; i < homeBtn.length; i++) {
    homeBtn[i].addEventListener("click", () => {
        window.scrollTo(0, 0);
        menuOverlay.classList.remove("is-visible");
        if (body.classList.contains("noscroll")) {
            body.classList.remove("noscroll");
        }
    });
}

// Home page scroll to about button
const scrollDown = document.getElementById("scroll-down");

scrollDown.addEventListener("click", () => {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView();
});

// Home page see upcoming events button

const tourButton = document.getElementById("seeTours");

tourButton.addEventListener("click", () => {
    const tourSection = document.getElementById("tour");
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

const scrollTop = function () {
    return window.scrollY;
};

let scrollState = 0;

// Primary scroll event function
const scrollDetect = function (down, up) {
    // Current scroll position
    const currentScroll = scrollTop();
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

// Form Validation

const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

const submitBtn = document.getElementById("submit");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    // get values from inputs
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    if (nameValue === "") {
        setErrorFor(name, "Name cannot be blank");
    } else {
        setSuccessFor(name);
    }
    if (emailValue === "") {
        setErrorFor(email, "Email cannot be blank");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Email is not valid");
    } else {
        setSuccessFor(email);
    }
    if (messageValue === "") {
        setErrorFor(message, "Message cannot be blank");
    } else {
        setSuccessFor(message);
    }

    if (
        nameValue !== "" &&
        messageValue !== "" &&
        emailValue !== "" &&
        isEmail(emailValue)
    ) {
        form.submit();
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;

    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}

// Hamburger menu

const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.querySelector(".mobile-nav-overlay-hidden");
const menuOptions = document.querySelectorAll(".mobile-menu-item");
const noscroll = document.querySelector(".noscroll");
const body = document.getElementById("body");

mobileMenu.addEventListener("click", function (e) {
    menuOverlay.classList.toggle("is-visible");
    body.classList.toggle("noscroll");
});

for (let i = 0; i < menuOptions.length; i++) {
    menuOptions[i].addEventListener("click", function () {
        menuOverlay.classList.remove("is-visible");
        if (body.classList.contains("noscroll")) {
            body.classList.remove("noscroll");
        }
    });
}

// About section image carousel - Flickity

var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
    // options
    cellAlign: "center",
    contain: true,
    imagesLoaded: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity(".main-carousel", {
    // options
});

// Internal navigation

const aboutNav = document.getElementById("aboutNav");
const tourNav = document.getElementById("tourNav");
const contactNav = document.getElementById("contactNav");
const aboutContact = document.getElementById("aboutContact");
const mobileNav = document.querySelectorAll(".mobile-menu-item");

const contact = document.getElementById("contact");
const about = document.getElementById("about");
const tour = document.getElementById("tour");

aboutNav.addEventListener("click", function (e) {
    e.preventDefault();
    about.scrollIntoView({ behavior: "smooth", block: "start" });
});

contactNav.addEventListener("click", function (e) {
    e.preventDefault();
    contact.scrollIntoView({ behavior: "smooth", block: "start" });
});

tourNav.addEventListener("click", function (e) {
    e.preventDefault();
    tour.scrollIntoView({ behavior: "smooth", block: "start" });
});

aboutContact.addEventListener("click", function (e) {
    e.preventDefault();
    contact.scrollIntoView({ behavior: "smooth", block: "start" });
});

for (let i = 0; i < mobileNav.length; i++) {
    mobileNav[i].addEventListener("click", function (e) {
        e.preventDefault();
        if (mobileNav[i] == mobileNav[0]) {
            about.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (mobileNav[i] == mobileNav[1]) {
            tour.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (mobileNav[i] == mobileNav[2]) {
            contact.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
}
