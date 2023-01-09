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
