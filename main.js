const menuEmali = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const  aside = document.querySelector(".product-detail");


menuEmali.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarrtioAside);


function toggleDesktopMenu(){
    aside.classList.add("inactive")
    desktopMenu.classList.toggle("inactive");
};
                                                
function toggleMobileMenu (){
   
   aside.classList.add("inactive");
   mobileMenu.classList.toggle("inactive");

};

function toggleCarrtioAside (){

    mobileMenu.classList.add("inactive");
    aside.classList.toggle("inactive");
    desktopMenu.classList.add("inactive");
};

 