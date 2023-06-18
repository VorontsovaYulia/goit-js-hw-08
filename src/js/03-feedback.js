import throttle from '/node_modules/lodash.throttle';

const formEl = document.querySelector(".feedback-form");
const localData = localStorage.getItem("feedback-form-state");

formEl.addEventListener("input", throttle(onInput, 500));

formEl.addEventListener("submit", onSubmit);

if (localData) {
    const parseData = JSON.parse(localData);

    formEl.elements.email.value = parseData.email;
    formEl.elements.message.value = parseData.message;   
}

function onInput(evt) {
    evt.preventDefault();
    const { email, message } = formEl.elements;
    
    const data = {
        email: email.value,
        message: message.value,
    }
        
        localStorage.setItem("feedback-form-state", JSON.stringify(data));      
}

function onSubmit(evt) {
    evt.preventDefault();

    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));

    localStorage.clear();
    formEl.reset();
}
