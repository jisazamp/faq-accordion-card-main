const items = document.querySelectorAll('.faq-list__item');
const images = document.querySelectorAll('.faq-list__item img');
const answers = document.querySelectorAll('.faq-list__answer');
const titles = document.querySelectorAll('.faq-list__title');

const collapseAll = () => {
  let index = 0;

  for (let image of images) {
    image.classList.remove('collapsed');
    titles[index].classList.remove('bold');
    answers[index].style.height = '0';
    answers[index].style.opacity = '0';
    answers[index].style.margin = '0';
    index++;
  }
};

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener('click', () => {
    if (images[i].classList.contains('collapsed')) {
      images[i].classList.remove('collapsed');
      titles[i].classList.remove('bold');
      answers[i].style.height = '0';
      answers[i].style.opacity = '0';
      answers[i].style.margin = '0';
    } else {
      collapseAll();
      images[i].classList.toggle('collapsed');
      titles[i].classList.toggle('bold');
      answers[i].style.opacity = '1';
      answers[i].style.height = '100%';
      answers[i].style.margin = '1em 0em';
    }
  });
}
