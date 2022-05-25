"use strict";

const buttonMenu = document.querySelector(".header__button-nav");
const buttonIcon = document.querySelector(".header__button-icon");
const nav = document.querySelector(".header__nav");
const buttonClose = document.querySelector(".header__button-close");

const showMenu = () => {
  buttonIcon.classList.toggle("header__button-icon_hide");
  nav.classList.toggle("header__nav_hide");
  buttonClose.classList.toggle("header__button-close_hide");
};

buttonMenu.addEventListener("click", showMenu);
