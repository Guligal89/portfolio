hamburguer = document.getElementsByClassName('hamburguer');
main = document.getElementsByTagName("main")[0];
mobileNav = document.getElementById("mobile-nav")
let activeNav = false;

function toggleNav() {
    if (activeNav) {
        main.className = ""
        activeNav = false;
        mobileNav.className = "hidden container"
    } else {
        main.className = "blur"
        activeNav = true;
        mobileNav.className = "container"
    }
};

let doc = document.documentElement
let lastScroll = window.scrollY || doc.scrollTop;
let currentScroll;
let direction = 0;
let lastDirection = 0;

let header = document.getElementsByTagName("header")[0];
header.addEventListener('animationend', fadeInEnd)
function fadeInEnd() {
    header.classList.remove('fadein');
}

function checkScroll() {
    currentScroll = window.scrollY || doc.scrollTop;

    if (currentScroll > lastScroll) {
        /* Scrolled up */
        direction = 2;
    } else if (currentScroll < lastScroll) {
        /* Scrolled down */
        direction = 1;
    }

    if (direction !== lastDirection) {
        toggleHeader(direction, currentScroll);
    }

    /* Update last scroll */
    lastScroll = currentScroll;
}

function toggleHeader(direction, currentScroll) {
    console.log(currentScroll);
    if (direction === 2 && currentScroll > header.clientHeight) {
        header.classList.add("headerDisappear");
        lastDirection = direction;
    } else if (direction === 1) {
        header.classList.remove("headerDisappear");
        lastDirection = direction;
    }
}

window.addEventListener('scroll', checkScroll);
