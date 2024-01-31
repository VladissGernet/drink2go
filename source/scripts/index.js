import { initMenu } from './menu.js';

initMenu();

const heroBlock = document.querySelector('.hero');
const sliderList = heroBlock.querySelector('.slider');
const sliderItems = sliderList.querySelectorAll('.slider__item');
const sliderPagination = heroBlock.querySelector('.slider-pagination');
const sliderPaginationButtons = sliderPagination.querySelectorAll('.slider-pagination__button');
const sliderPrevButton = heroBlock.querySelector('.slider-button-prev');
const sliderNextButton = heroBlock.querySelector('.slider-button-next');

const isFirstSlideShown = () => {
  const firstSlide = sliderList.querySelectorAll('.slider__item')[0];
  if (firstSlide.classList.contains('slider__item--hidden') === false) {
    sliderPrevButton.disabled = true;
    return;
  }
  sliderPrevButton.disabled = false;
};
const isLastSlideShown = () => {
  const lastSlide = sliderList.querySelectorAll('.slider__item')[sliderItems.length - 1];
  if (lastSlide.classList.contains('slider__item--hidden') === false) {
    sliderNextButton.disabled = true;
    return;
  }
  sliderNextButton.disabled = false;
};

isFirstSlideShown();
isLastSlideShown();

const onNextButtonClick = () => {
  const updatedSliderList = sliderList.querySelectorAll('.slider__item');
  let currentSliderIndex;
  updatedSliderList.forEach((slide, index) => {
    if (slide.classList.contains('slider__item--hidden') === false) {
      currentSliderIndex = index;
    }
  });
  const isNotLastSlideIndex = currentSliderIndex + 1 > updatedSliderList.length - 1 === false;
  if (isNotLastSlideIndex) {
    updatedSliderList[currentSliderIndex].classList.add('slider__item--hidden');
    updatedSliderList[currentSliderIndex + 1].classList.remove('slider__item--hidden');
    isLastSlideShown();
  }
  isFirstSlideShown();
};
sliderNextButton.addEventListener('click', onNextButtonClick);

const onPrevButtonClick = () => {
  const updatedSliderList = sliderList.querySelectorAll('.slider__item');
  let currentSliderIndex;
  updatedSliderList.forEach((slide, index) => {
    if (slide.classList.contains('slider__item--hidden') === false) {
      currentSliderIndex = index;
    }
  });
  const isNotFirstSlideIndex = currentSliderIndex > 0;
  if (isNotFirstSlideIndex) {
    updatedSliderList[currentSliderIndex].classList.add('slider__item--hidden');
    updatedSliderList[currentSliderIndex - 1].classList.remove('slider__item--hidden');
    isLastSlideShown();
  }
  isFirstSlideShown();
};
sliderPrevButton.addEventListener('click', onPrevButtonClick);
// sliderNextButton.click();

