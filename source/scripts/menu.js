import { menuIcon } from './constants.js';
import { siteNavigation, menuButton, menuButtonIcon } from './elements.js';

const initMenu = () => {
  const hideMenu = () => {
    menuButton.classList.remove('opened');
    menuButtonIcon.setAttribute('href', menuIcon.burger);
    siteNavigation.style.display = 'none';
  };

  const checkOutsideClick = (evt) => {
    const isOutsideListClick = evt.target.closest('.site-navigation') === null;
    const isNotButtonClick = evt.target.closest('.js-toggle-button') === null;
    if (isOutsideListClick && isNotButtonClick) {
      document.removeEventListener('click', checkOutsideClick);
      hideMenu();
    }
  };
  menuButton.addEventListener('click', () => {
    const isMenuOpened = menuButton.classList.contains('opened');
    if (isMenuOpened === false) {
      document.addEventListener('click', checkOutsideClick);
      siteNavigation.style.display = 'block';
      menuButtonIcon.setAttribute('href', menuIcon.crosshair);
      menuButton.classList.add('opened');
      return;
    }
    if (menuButton.classList.contains('opened') === true) {
      document.removeEventListener('click', checkOutsideClick);
      hideMenu();
    }
  });
};

export { initMenu };
