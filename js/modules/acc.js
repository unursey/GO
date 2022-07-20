export const acc = () => {
  const qItems = document.querySelectorAll(".question__item");
  const qBtns = document.querySelectorAll(".question__button");
  const qWrapper = document.querySelectorAll(".question__text-wrapper");

  let heightWrapper = 0;
  qWrapper.forEach(elem => {
    if (heightWrapper < elem.scrollHeight) {
        heightWrapper = elem.scrollHeight;
    }
  })

  qBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      for (let i = 0; i < qItems.length; i++) {
        if (index === i) {
            qWrapper[i].style.height = 
            qItems[i].classList.contains('question__item_active') ?
            '' : `${heightWrapper}px`
          qItems[i].classList.toggle("question__item_active");
        } else {
          qItems[i].classList.remove("question__item_active");
          qWrapper[i].style.height = '';
        }
      }
    });
  });
};
