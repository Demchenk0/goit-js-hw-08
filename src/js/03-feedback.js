import throttle from 'lodash.throttle';

const newForm = document.querySelector('.feedback-form');
const newTextarea = document.querySelector('textarea');
const newInput = document.querySelector('input');

const STORAGE_KEY = 'feedback-form-state';

newForm.addEventListener('submit', onInputSubmit);
newForm.addEventListener('input', throttle(onTextareaInput, 500));

let formDataParse = null;
populateTextarea();

const formData = {
    email: formDataParse?.email ? formDataParse.email : '',
    message: formDataParse?.message ? formDataParse.message : '',
};
// если поля заполненые то оставить значения, если пустые поля то заполни
function onTextareaInput(event) {
    formData[event.target.name] = event.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    formDataParse = JSON.parse(savedMessage);

    if (formDataParse) {

        if (formDataParse.email && formDataParse.message) {
            newInput.value = formDataParse.email;
            newTextarea.value = formDataParse.message;
            return;
        };
        if (formDataParse.email) {
            newInput.value = formDataParse.email;
            return;
        };
        if (formDataParse.message) {
            newTextarea.value = formDataParse.message;
            return;
        };
        // 
    }

}

function onInputSubmit(event) {
    event.preventDefault();
    if (!formData.email || !formData.message) {
        alert(`не заполненые поля`);
        return;
    }
    newForm.reset();
    localStorage.removeItem(STORAGE_KEY);

    console.log(formData);
}





