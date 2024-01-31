const siteNavigation = document.querySelector('.site-navigation');
const menuButton = document.querySelector('.js-toggle-button');
const menuButtonIcon = menuButton.querySelector('use');
const heroBlock = document.querySelector('.hero');
const sliderList = heroBlock.querySelector('.slider');
const sliderItems = sliderList.querySelectorAll('.slider__item');
const sliderPagination = heroBlock.querySelector('.slider-pagination');
const sliderPaginationItems = sliderPagination.querySelectorAll('.slider-pagination__button');
const sliderPrevButton = heroBlock.querySelector('.slider-button-prev');
const sliderNextButton = heroBlock.querySelector('.slider-button-next');

export {
  siteNavigation,
  menuButton,
  menuButtonIcon,
  sliderList,
  sliderItems,
  sliderPagination,
  sliderPaginationItems,
  sliderPrevButton,
  sliderNextButton
};
