const buttonIncrement = document.querySelector('button[data-action="increment"]');
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const counterValue = document.querySelector('#value')
const currentValue = 0;

const increment = function () {
    currentValue += 1;
    getValue();
};

const decrement = function () {
    currentValue -= 1;
    getValue ();
};

const getValue = function () {
    counterValue.textContent = currentValue;
};

buttonIncrement.addEventListener('click', () => increment());
buttonDecrement.addEventListener('click', () => decrement());