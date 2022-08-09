import { getElements } from "./getElements.js";
import { openAnimationBurger, closeAnimationBurger } from "./animation.js";

const { modal, btnBurger, burger, page } = getElements();

const closeModal = () => {
  if (modal.classList.contains("modal_visible")) {
    modal.classList.remove("modal_visible");
    document.querySelector('.modal__form').reset();
  }
};

export const addOpenModal = () => {
  const requestCall = document.querySelectorAll(
    ".header__button, .burger__button"
  );
  requestCall.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.classList.toggle("modal_visible");
      closeBurger();
      pageOverfow();
    });
  });
};

export const addCloseModal = () => {
  page.addEventListener("click", (e) => {
    if (
      e.target === modal ||
      e.target.closest(".modal__close") ||
      e.target.classList.contains("header__container") ||
      e.target.classList.contains("header__link")
    ) {
      closeModal();
      pageOverfow();
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
    if (!burger.classList.contains("burger_visible")) {
      openAnimationBurger();
    }
    if (burger.classList.contains("burger_visible")) {
      closeAnimationBurger();
    }
    burger.classList.toggle("burger_visible");
    closeModal();
    changeBtnBurger();
    pageOverfow();
  });
};

export const addCloseBurger = () => {
  page.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("burger") ||
      e.target.closest(".burger") ||
      e.target.classList.contains("header__container")
    ) {
      closeAnimationBurger();
      closeBurger();
      pageOverfow();
    }
  });
};

const pageOverfow = () => {
  const bodyWidth = page.offsetWidth;
  if (
    modal.classList.contains("modal_visible") ||
    burger.classList.contains("burger_visible")
  ) {
    page.style.overflow = "hidden";
    page.style.marginRight = `${getScrollBarSize(bodyWidth)}px`;
  } else {
    setTimeout(function() {
      page.style.overflow = "";
      page.style.marginRight = "";
    }, 500);
  }
};

const getScrollBarSize = (bodyWidth) => {
  let newBodyWidth = page.offsetWidth;

  if (newBodyWidth === bodyWidth) {
    return;
  }
  const x = newBodyWidth - bodyWidth;
  return x;
};
