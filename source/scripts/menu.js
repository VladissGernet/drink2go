import { menuIcon } from './constants.js';
import { siteNavigation, menuButton, menuButtonIcon } from './elements.js';

const initMenu = () => {
  menuButton.addEventListener('click', () => {
    const isMenuOpened = menuButton.classList.contains('opened');
    if (isMenuOpened === false) {
      siteNavigation.style.display = 'block';
      menuButtonIcon.setAttribute('href', menuIcon.crosshair);
      menuButton.classList.add('opened');
      return;
    }
    if (menuButton.classList.contains('opened') === true) {
      menuButton.classList.remove('opened');
      menuButtonIcon.setAttribute('href', menuIcon.burger);
      siteNavigation.style.display = 'none';
    }
  });
};

export { initMenu };
