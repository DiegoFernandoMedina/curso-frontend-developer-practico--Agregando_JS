const menuEmali = document.querySelector(".navbar-email");
const desktopMenu= document.querySelector(".desktop-menu");
const menuHamIcon= document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");


menuEmali.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
};

function toggleMobileMenu (){
    mobileMenu.classList.toggle("inactive");
};

