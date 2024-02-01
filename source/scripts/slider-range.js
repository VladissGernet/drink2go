import {
  priceSlider,
  priceSliderStaticWrapper,
  priceInputMin,
  priceInputMax,
  filtersForm
} from './elements.js';

import { defaultSliderValues } from './constants.js';

const initSliderRange = () => {
  const { min, max, start, step } = defaultSliderValues;
  priceSliderStaticWrapper.style.display = 'none';
  priceSlider.id = 'js-range-control';
  noUiSlider.create(priceSlider, {
    start: [min, start],
    step: step,
    connect: true,
    range: {
      'min': min,
      'max': max
    },
    format: {
      to(value) {
        return value.toFixed(0);
      },
      from(value) {
        return parseFloat(value);
      },
    },
  });

  priceSlider.noUiSlider.on('update', () => {
    priceInputMin.value = priceSlider.noUiSlider.get()[0];
    priceInputMax.value = priceSlider.noUiSlider.get()[1];
  });

  filtersForm.addEventListener('reset', () => {
    priceSlider.noUiSlider.set([min, 920]);
  });
};

export { initSliderRange };
