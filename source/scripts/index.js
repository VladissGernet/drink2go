import { initMenu } from './menu.js';
import { initSlider } from './slider.js';

initMenu();
initSlider();

const priceSlider = document.querySelector('.filter-range__controls');
const priceSliderStaticWrapper = priceSlider.querySelector('.filter-range__static-range-wrapper');
priceSliderStaticWrapper.style.display = 'none';
priceSlider.id = 'js-range-control';
noUiSlider.create(priceSlider, {
  start: [0, 920],
  step: 5,
  connect: true,
  range: {
    'min': 0,
    'max': 1000
  }
});

priceSlider.noUiSlider.on('update', () => {
  console.log(priceSlider.noUiSlider.get());
});

priceSlider.noUiSlider.set([150, 100]);
