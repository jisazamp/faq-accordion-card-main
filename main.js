const items = document.querySelectorAll('.faq-list__item');
const images = document.querySelectorAll('.faq-list__item img');

const collapseAll = () => {
  for (let image of images) {
    image.classList.remove('collapsed');
  }
};

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener('click', () => {
    if (images[i].classList.contains('collapsed'))
      images[i].classList.remove('collapsed');
    else {
      collapseAll();
      images[i].classList.toggle('collapsed');
    }
  });
}
