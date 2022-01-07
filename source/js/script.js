const SERVICE_ACTIVE = 'service-list--active';
const SERVICE_NOJS = 'service--nojs';
const serviceBlock = document.querySelector(".service");
const serviceTriggers = serviceBlock.querySelectorAll('h3');
const serviceList = serviceBlock.querySelector('.service-list');

serviceBlock.classList.remove(SERVICE_NOJS);

serviceTriggers.forEach((item) => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();
    const block = item.nextSibling;
    block.classList.toggle(SERVICE_ACTIVE);
    if (block.classList.contains(SERVICE_ACTIVE)) {

      item.style.background = 'whitesmoke';
    }else{
      item.style.background = 'none';
    }

  });
});


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


