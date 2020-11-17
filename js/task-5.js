const inputForm = {
    inputText: document.querySelector('input#name-input');
    shownText: document.querySelector('span#name-output');
};

const shownText = function () {
    if (inputText.value === '') {
        inputForm.shownText.textContent = 'незнакомец'
    };
    else {
        inputForm.shownText.textContent = inputForm.inputText.value;
    }
};

inputForm.inputText.addEventListener('input', () => shownText());