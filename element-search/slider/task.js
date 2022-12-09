const sliderArrowPrev = document.querySelector(".slider__arrow_prev");
const sliderArrowNext = document.querySelector(".slider__arrow_next");
const sliderItems = document.querySelectorAll(".slider__item");
let current = 0;

sliderArrowPrev.addEventListener("click", function () {
    if (current - 1 === -1) {
        current = sliderItems.length - 1;
    } else {
        current -= 1;
    }
    slider();
});

sliderArrowNext.addEventListener("click", function () {
    if (current + 1 === sliderItems.length) {
        current = 0;
    } else {
        current += 1;
    }
    slider();
});

const slider = () => {
    const arrSliderItems = Array.from(sliderItems);

    for (let i = 0; i < arrSliderItems.length; i++) {
        arrSliderItems[i].classList.remove("slider__item_active");
    }

    arrSliderItems[current].classList.add("slider__item_active");
};
