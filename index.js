const slides = document.querySelectorAll('.slide');

slides.forEach((slide) => {
  slide.addEventListener('click', () => {
    clearClassActive(slides);
    slide.classList.add('slide-active');
  });
});

function clearClassActive(domItemsArray) {
  domItemsArray.forEach((item) => {
    item.classList.remove('slide-active');
  });
}
