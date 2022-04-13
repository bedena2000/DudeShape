const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination


  // Navigation arrows
  navigation: {
    nextEl: '.furniture-wrapper-box-right-right-arrow',
    prevEl: '.furniture-wrapper-box-right-left-arrow',
  },

  
});

const burgerBtn = document.querySelector(".header-menu-search-burger");
const searchBtn = document.querySelector(".header-menu-search img");
const searchBar = document.querySelector(".search-bar-item");
const searchBarBackground = document.querySelector(".search-bar-background");

searchBarBackground.addEventListener("click", (event) => {
  searchBarBackground.classList.toggle("search-bar-background-show");
  searchBar.classList.toggle("search-bar-item-show");
});

searchBtn.addEventListener("click", (event) => {
  searchBarBackground.classList.toggle("search-bar-background-show");
  searchBar.classList.toggle("search-bar-item-show");
});

function closeAside() {
  asideBackground.classList.toggle("aside-background-show");
  asideMenu.classList.toggle("aside-menu-show");
}

const asideMenuClose = document.querySelector(".aside-menu i");
const asideBackground = document.querySelector(".aside-background");
const asideMenu = document.querySelector(".aside-menu");
asideMenuClose.addEventListener("click", closeAside);
asideBackground.addEventListener("click", closeAside);
burgerBtn.addEventListener("click", closeAside);

const allAsideLinks = Array.from(document.querySelectorAll(".aside-menu-link"));allAsideLinks.forEach(item => {
  item.addEventListener("click", (event) => {
    closeAside();
  });
});

ScrollReveal().reveal(".header");
ScrollReveal().reveal(".companies", {delay: 500});
ScrollReveal().reveal(".main", {delay: 500});
AOS.init({once: true});