
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
})
