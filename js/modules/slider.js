export const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  loop: true,
  centeredSlides: true,
  spaceBetween: 25,

  autoplay: {
    delay: 3000,
  },

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".range__button-next",
    prevEl: ".range__button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    691: {
        slidesPerView: 2
    },
  },
});
