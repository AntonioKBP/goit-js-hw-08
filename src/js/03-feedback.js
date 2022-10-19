import lodashThrottle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('input'),
  textareaInput: document.querySelector('.feedback-form textarea'),
};

const formData = {};

loadStorage();

refs.form.addEventListener('input', lodashThrottle(onFormInput, 500));
refs.form.addEventListener('submit', e => {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
});

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function loadStorage() {
  const savedStorage = localStorage.getItem(STORAGE_KEY);
  const parsedStorage = JSON.parse(savedStorage);
  if (savedStorage) {
    refs.emailInput.value = parsedStorage['email'] || '';
    refs.textareaInput.value = parsedStorage['message'] || '';
  }
}
