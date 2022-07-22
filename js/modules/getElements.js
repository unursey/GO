export const getElements = () => {
  const page = document.querySelector('.page');
  const modal = page.querySelector(".modal");
  const btnBurger = page.querySelector(".header__button-nav");
  const burger = page.querySelector(".burger");
  const burgerMenu = page.querySelector(".burger__container");
  

  return {
    modal,
    btnBurger,
    burger,
    page,
    burgerMenu,
  };
};
