const SERVICE_ACTIVE = 'service-list--active';
const SERVICE_HEADER = 'service-block--active';
const SERVICE_NOJS = 'service--nojs';
const serviceBlock = document.querySelector(".service");
const serviceTriggers = serviceBlock.querySelectorAll('h3');
const serviceList = serviceBlock.querySelector('.service-list');

serviceBlock.classList.remove(SERVICE_NOJS);

serviceTriggers.forEach((item) => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();
    const block = item.nextSibling;
    const blockUp = item.closest('section');
    block.classList.toggle(SERVICE_ACTIVE);
    if (block.classList.contains(SERVICE_ACTIVE)){
      blockUp.classList.add(SERVICE_HEADER);
    }else{
      blockUp.classList.remove(SERVICE_HEADER);
    }
  });
});
