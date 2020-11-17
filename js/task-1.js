console.log(
    `В списке ${document.querySelectorAll("li.item").length} категории.`, 
    );

    document.querySelectorAll("li.item").forEach(
        value => console.log('Категория: ' + value.firstElementChild.textContent + '\n' 
        + 'Количество элементов: ' + value.querySelectorAll('li').length));

