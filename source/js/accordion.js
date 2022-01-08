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
