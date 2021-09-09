const emailInput = document.getElementById('exampleInputEmail1');
const button = document.getElementById('submit');


button.addEventListener('click', (e) => {
    e.preventDefault();
    const alert = document.getElementById('emailHelp');
    const email = emailInput.value;

    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(regexEmail)) {
        alert.classList.add('d-none');
        emailInput.style.borderColor = 'green';
    }
    else {
        alert.classList.remove('d-none');
        emailInput.style.borderColor = 'red';
    }


})

// another validation 

const inputEmal = document.getElementById('InputEmail');
inputEmal.addEventListener('keyup', (e) => {
    e.preventDefault();
    const alert = document.getElementById('error');
    const email = inputEmal.value
    

    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(regexEmail)) {
        alert.classList.add('d-none');
        inputEmal.style.borderColor = 'green';
    }
    else {
        alert.classList.remove('d-none');
        inputEmal.style.borderColor = 'red';
    }


})

