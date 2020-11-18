const inputSize = document.querySelector("input#font-size-control");
const shownText = document.querySelector("span#text");

const checkSize = function () {
    shownText.style.fontSize = `${inputSize.valueAsNumber}px`;
}
inputSize.addEventListener('input', () => checkSize());
