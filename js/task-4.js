const allButtons = {
    buttonIncrement: document.querySelector('button[data-action="increment"]');
    buttonDecrement: document.querySelector('button[data-action="decrement"]');
    counterValue: document.querySelector('#value');
    currentValue: 0;
};

const increment = function () {
    allButtons.currentValue += 1;
    getValue();
}:

const decrement = function () {
    allButtons.currentValue -= 1;
    getValue ();
};

const getValue = function () {
    allButtons.counterValue.textContent = allButtons.currentValue;
};

allButtons.buttonIncrement.addEventListener('click', () => increment());
allButtons.buttonDecrement.addEventListener('click', () => decrement());