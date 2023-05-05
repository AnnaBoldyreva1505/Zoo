import Swiper, { Pagination, Autoplay } from "swiper";

const params = {
  spaseBetween: 20,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  sliderPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  modules: [Autoplay, Pagination],
};

export const slidersInit = (selectotSlider, newParams) => {
  new Swiper(selectotSlider, {
    ...params,
    ...newParams,
  });
};


