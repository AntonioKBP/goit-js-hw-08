// import lodashThrottle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-form-state';

// // const formData = {};

// const form = document.querySelector('.feedback-form');

// const emailInput = document.querySelector('[type="email"]');

// const textareaInput = document.querySelector('[name="message"]');

// const button = document.querySelector('[type="submit"]');

// form.addEventListener('submit', onFormSubmit);
// form.addEventListener('input', onFormInput);
// textareaInput.addEventListener('input', lodashThrottle(onTextareaInput, 500));

// populateTextareaOutput();

// function onFormSubmit(evt) {
//   evt.preventDefault();
//   evt.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

// function onTextareaInput(evt) {
//   const message = evt.target.value;
//   localStorage.setItem(STORAGE_KEY, message);
// }

// function populateTextareaOutput() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);
//   if (savedMessage) {
//     textareaInput.value = savedMessage;
//   }
// }

// function onFormInput(evt) {
//   formData[evt.target.name] = evt.target.value;
//   console.log(formData);
// }

// function onFormInput(evt) {
//   //   const email = evt.target.value;
//   //   const textarea = console.log(email);
//   //   localStorage.setItem(STORAGE_KEY, ([evt.target.name] = evt.target.value));
//   //   formData[evt.target.name] = evt.target.value;
//   //   console.log(formData);
// }

import lodashThrottle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

// const formData = {};

const form = document.querySelector('.feedback-form');

const emailInput = document.querySelector('[type="email"]');

const textareaInput = document.querySelector('[name="message"]');

const button = document.querySelector('[type="submit"]');

form.addEventListener('submit', e => {
  e.preventDefault();
  e.currentTarget.reset();
});

form.addEventListener('input', lodashThrottle(onFormInput, 500));

populateTextareaOutput();

const formData = {};

function onFormInput(evt) {
  // console.log(evt.target.value);
  formData[evt.target.name] = evt.target.value;
  // console.log(formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  // const message = ([evt.target.name] = evt.target.value);
  // console.log(message);
  // localStorage.setItem(STORAGE_KEY, message);
  // console.log(localStorage);
}

function populateTextareaOutput() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  // console.log(savedMessage);
  if (savedMessage) {
    form.target.value = JSON.parse(savedMessage);
    console.log(form.target.value);
  }
}
