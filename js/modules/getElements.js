export const getElements = () => {
  const modal = document.querySelector(".modal");
  const btnBurger = document.querySelector(".header__button-nav");
  const burger = document.querySelector(".burger");

  return {
    modal,
    btnBurger,
    burger,
  };
};
