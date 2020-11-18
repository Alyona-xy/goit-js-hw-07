const inputText = document.querySelector('input#name-input');
const displayText = document.querySelector('span#name-output');

const shownText = function () {
    if (inputText.value === '') {
        displayText.textContent = 'незнакомец'
    }
    else {
        displayText.textContent = inputText.value;
    }
};

inputText.addEventListener('input', () => shownText());