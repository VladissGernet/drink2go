import {
  BASE_URL,
  errorText,
  SubmitButtonText
} from './constants.js';
import { filtersForm } from './elements.js';


const sendData = (body) =>
  fetch(BASE_URL, { method: 'POST', body })
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(errorText);
    });

const submitButton = filtersForm.querySelector('[type="submit"]');

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};
const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const onFiltersFormSubmit = (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  blockSubmitButton();
  sendData(formData).finally(unblockSubmitButton);
};

const initFiltersFormSending = () => {
  filtersForm.addEventListener('submit', onFiltersFormSubmit);
};


export { initFiltersFormSending };
