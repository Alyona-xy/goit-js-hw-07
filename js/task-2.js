const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];


  
let ingredientsList = ingredients.map((value) =>
  {
    let item = document.createElement('li');
    item.textContent = value;
    return item;
  });

const getFullList = function (nodeList) {
  return nodeList.map(element => element.outerHTML).join('');
}    
document.querySelector("#ingredients").insertAdjacentHTML('afterbegin',getFullList(ingredientsList));




/* const ulRef = document.createElement ('ul');
ulRef.setAttribute('id', 'ingredients');

const li1 = document.createElement('li');
li1.textContent = 'Картошка';

const li2 = document.createElement('li');
li2.textContent = 'Грибы';

const li3 = document.createElement('li');
li3.textContent = 'Чеснок';

const li4 = document.createElement('li');
li4.textContent = 'Помидоры';

const li5 = document.createElement('li');
li5.textContent = 'Зелень';

const li6 = document.createElement('li');
li6.textContent = 'Приправы'; */

/*   ingredients.textContent = "Ингридиенты";
  for (const ingredient of ingredients) {
 document.createElement('li');
};
ingredient.textContent = `${ingredients.value}`; */

  /* const ingredient = document.createElement('li');
  
  ingredient.textContent = ""
  console.log(ingredient.textContent);

  ingredient.forEach(ingredient => 
    console.log(ingredient.textContent)); */

/* const list = [li1, li2, li3, li4, li5, li6];

ulRef.append(...list);
console.log(ulRef); */


    