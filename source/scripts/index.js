import { initMenu } from './menu.js';

initMenu();

const heroBlock = document.querySelector('.hero');
const sliderList = heroBlock.querySelector('.slider');
const sliderItems = sliderList.querySelectorAll('.slider__item');
const sliderPagination = heroBlock.querySelector('.slider-pagination');
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

const onPaginationClick = (evt) => {
  const selectedPaginationButton = evt.target;
  if (selectedPaginationButton.classList.contains('slider-pagination__button') === false) {
    return;
  }
  const isNotActiveButton = selectedPaginationButton.classList.contains('slider-pagination__button--active') === false;
  if (isNotActiveButton) {
    const activeButton = sliderPagination.querySelector('.slider-pagination__button--active');
    activeButton.classList.remove('slider-pagination__button--active');
    selectedPaginationButton.classList.add('slider-pagination__button--active');
    const sliderPaginationItems = sliderPagination.querySelectorAll('.slider-pagination__button');
    const activeButtonIndex = Array.from(sliderPaginationItems).findIndex((item) => item.classList.contains('slider-pagination__button--active'));
    console.log(activeButtonIndex);
    sliderItems.forEach((item) => item.classList.add('slider__item--hidden'));
    sliderItems[activeButtonIndex].classList.remove('slider__item--hidden');
    isFirstSlideShown();
    isLastSlideShown();
  }
};
sliderPagination.addEventListener('click', onPaginationClick);
