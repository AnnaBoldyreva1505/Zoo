import './index.html';

import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';
import { slidersInit } from './modules/sliders';



slidersInit('.about__swiper', {
    pagination: {
        el: '.about__slider-pagination',
    }
})

slidersInit('.career__slider', {
    pagination: {
        el: '.career__slider-pagination',
    },

    // breakpoints: {
    // 768: {
    //         slidesPerView: 2,
    //         spaceBetween: 20
    //       },
    //  1024: {
    //     slidesPerView: 2,
    //   },
    //   1240: {
    //     slidesPerView: 3,
    //   },
    // },
})

const videoBg = document.querySelector('.video-bg')

videoBg.innerHTML = `
<source src="video/video.webm" type="video/webm">
<source src="video/video.mp4" type="video/mp4">
`


