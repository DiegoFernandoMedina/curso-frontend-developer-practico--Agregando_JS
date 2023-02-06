const menuEmali = document.querySelector(".navbar-email");
const desktopMenu= document.querySelector(".desktop-menu");

menuEmali.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
};

