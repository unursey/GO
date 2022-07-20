export const getElements = () => {
  const page = document.querySelector('.page');
  const modal = page.querySelector(".modal");
  const btnBurger = page.querySelector(".header__button-nav");
  const burger = page.querySelector(".burger");
  

  return {
    modal,
    btnBurger,
    burger,
    page
  };
};
