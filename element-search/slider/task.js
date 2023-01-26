const sliderArrowPrev = document.querySelector(".slider__arrow_prev");
const sliderArrowNext = document.querySelector(".slider__arrow_next");
const sliderDots = document.querySelector('.slider__dots')
const sliderItems = Array.from(document.querySelectorAll(".slider__item"));
const dotItems = Array.from(sliderDots.children)

sliderDots.firstElementChild.classList.add('slider__dot_active')

const switchToRight = () => {
  let currentSliderIndex = sliderItems.findIndex(slide => slide.classList.contains('slider__item_active'));
  sliderItems.forEach(slider => slider.classList.remove('slider__item_active'));
  dotItems.forEach(dot => dot.classList.remove('slider__dot_active'));
  currentSliderIndex++;

  if (currentSliderIndex === sliderItems.length) {
    sliderItems[0].classList.add("slider__item_active");
    dotItems[0].classList.add('slider__dot_active');
  } else {
    sliderItems[currentSliderIndex].classList.add("slider__item_active");
    dotItems[currentSliderIndex].classList.add('slider__dot_active');
  }
}

const switchToLeft = () => {
  let currentSliderIndex = sliderItems.findIndex(slide => slide.classList.contains('slider__item_active'));
  sliderItems.forEach(slider => slider.classList.remove('slider__item_active'));
  dotItems.forEach(dot => dot.classList.remove('slider__dot_active'));
  currentSliderIndex--;

  if (currentSliderIndex < 0) {
    sliderItems[sliderItems.length - 1].classList.add("slider__item_active")
    dotItems[sliderItems.length - 1].classList.add('slider__dot_active');
  } else {
    sliderItems[currentSliderIndex].classList.add("slider__item_active");
    dotItems[currentSliderIndex].classList.add('slider__dot_active');
  }
}

const switchDots = (e) => {
  if (!e.target.classList.contains('slider__dot')) return;

  let currentDotIndex = dotItems.findIndex(dot => dot === e.target);

  dotItems.forEach(dot => dot.classList.remove('slider__dot_active'));
  sliderItems.forEach(slider => slider.classList.remove('slider__item_active'));
  dotItems[currentDotIndex].classList.add('slider__dot_active');
  sliderItems[currentDotIndex].classList.add('slider__item_active');
}

sliderArrowNext.addEventListener('click', switchToRight);
sliderArrowPrev.addEventListener('click', switchToLeft);
sliderDots.addEventListener('click', switchDots)