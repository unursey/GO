import { getElements } from "./getElements.js";

const { modal, btnBurger, burger, page } = getElements();


const closeModal = () => {
  if (modal.classList.contains("modal_visible")) {
    modal.classList.remove("modal_visible");
  }
}

export const addOpenModal = () => {
  const requestCall = document.querySelectorAll(
    ".header__button, .burger__button"
  );
  requestCall.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.classList.toggle("modal_visible");
      closeBurger();
      page.style.overflow = 'hidden';
    });
  });
};

export const addCloseModal = () => {
  page.addEventListener("click", (e) => {
    if (
      e.target === modal ||
      e.target.closest(".modal__close") ||
      e.target.classList.contains("header__container") ||
      e.target.classList.contains('header__link')
    ) {
      closeModal();
      page.style.overflow = '';
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
  btnBurger.addEventListener("click", (e) => {
      burger.classList.toggle("burger_visible");
      closeModal();
      changeBtnBurger();
      page.style.overflow = 'hidden';   
  });
};

export const addCloseBurger = () => {
   page.addEventListener("click", (e) => {
    if ((e.target.classList.contains('burger')) ||
    (e.target.closest('.burger')) ||
    (e.target.classList.contains('header__container'))) {
      closeBurger();
      page.style.overflow = '';
    }
  });
};
