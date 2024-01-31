import { initMenu } from './menu.js';
import { initSlider } from './slider.js';

initMenu();
initSlider();

const priceSlider = document.querySelector('.filter-range__controls');
priceSlider.innerHTML = '';
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
