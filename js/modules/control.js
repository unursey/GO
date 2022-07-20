import { getElements } from "./getElements.js";

const { modal, btnBurger, burger } = getElements();

export const addOpenModal = () => {
  const requestCall = document.querySelectorAll(
    ".header__button, .burger__button"
  );
  requestCall.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.classList.add("modal_visible");

      closeBurger();
    });
  });
};

export const addCloseModal = () => {
  modal.addEventListener("click", (e) => {
    console.log(e.target);
    if (
      e.target === modal ||
      e.target.closest(".modal__close") ||
      e.target.classList.contains("header")
    ) {
      modal.classList.remove("modal_visible");
    }
  });
};

const changeBtnBurger = () => {
  const buttonIcon = document.querySelector(".header__button-icon");
  const buttonClose = document.querySelector(".header__button-close");

  buttonIcon.classList.toggle("header__button-icon_hide");
  buttonClose.classList.toggle("header__button-close_hide");
};

const closeBurger = () => {
  if (burger.classList.contains("burger_visible")) {
    burger.classList.remove("burger_visible");
    changeBtnBurger();
  }
};

export const addOpenBurger = () => {
  btnBurger.addEventListener("click", () => {
    burger.classList.add("burger_visible");
    changeBtnBurger();
  });
};

export const addCloseBurger = () => {
  burger.addEventListener("click", (e) => {
    if (e.target === burger || e.target === btnBurger || e.target.closest('.burger__item')) {
      closeBurger();
    }
  });
};
