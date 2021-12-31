import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');
const refs = {
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea')
}
formEl.addEventListener('submit', onFormSubmit);

const inputValue = {};

const throttleSaveChange = throttle(function saveChange(evt) {
    inputValue[evt.target.name] = evt.target.value;
   localStorage.setItem("feedback-form-state", JSON.stringify(inputValue));

}, 500);
formEl.addEventListener('input', throttleSaveChange);

    const feedbackStorage = JSON.parse(localStorage.getItem("feedback-form-state"));


function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
    console.log(inputValue);
}
    refs.email.value = feedbackStorage.email;
refs.message.value = feedbackStorage.message;
    
if (!feedbackStorage.email) {
    refs.email.value = '';
}
if (!feedbackStorage.message) {
    refs.message.value = '';
}
    
