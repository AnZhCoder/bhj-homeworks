const sliderArrowPrev = document.querySelector(".slider__arrow_prev");
const sliderArrowNext = document.querySelector(".slider__arrow_next");
const sliderDots = document.querySelector('.slider__dots')
const sliderItems = Array.from(document.querySelectorAll(".slider__item"));
const dotItems = Array.from(sliderDots.children)

sliderDots.firstElementChild.classList.add('slider__dot_active');

const switchSlider = (indexNextSlide) => {
  let index = indexNextSlide;
  const currentSliderIndex = sliderItems.findIndex(slide => slide.classList.contains('slider__item_active'));
  sliderItems[currentSliderIndex].classList.remove('slider__item_active');
  dotItems[currentSliderIndex].classList.remove('slider__dot_active');

  if (index >= sliderItems.length) {
    index = 0;
  }

  if (index < 0) {
    index = sliderItems.length - 1;
  }

  sliderItems[index].classList.add('slider__item_active');
  dotItems[index].classList.add('slider__dot_active');
}



sliderDots.addEventListener('click', e => {
  if (!e.target.classList.contains('slider__dot')) {
    return
  }
  let indexNextSlide = dotItems.findIndex(dot => dot === e.target);
  switchSlider(indexNextSlide);
})

sliderArrowNext.addEventListener('click', () => {
  let indexNextSlide = (sliderItems.findIndex(slide => slide.classList.contains('slider__item_active'))) + 1;
  switchSlider(indexNextSlide);
});


sliderArrowPrev.addEventListener('click', () => {
  let indexNextSlide = (sliderItems.findIndex(slide => slide.classList.contains('slider__item_active'))) - 1;
  switchSlider(indexNextSlide)
});
