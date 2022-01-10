
const slider = new Swiper('.swiper', {
  direction: 'horizontal',
  spaceBetween: 15,

  slidesPerView: 4,
  loop: true,
  keyboardControl: true,
  updateOnWindowResize: true,

  observer: true,
  observeParents: true,
  observeSliderChildren: true,

  watchSlidesProgress: true,
  preloadImages: true,
  keyboard: {
    enabled: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  a11y: {
    enabled: true,
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView:2,
    },
    1024: {
      slidesPerView:4,
    },
  }
})
