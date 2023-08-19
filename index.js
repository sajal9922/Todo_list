const inputElem = document.querySelector('.input');
const listContainerElm = document.querySelector('.list-container');
const addButtonElm = document.querySelector('.add-button');
const errorMessageElm = document.querySelector('.error-message');
// console.log(listContainerElm);

addButtonElm.addEventListener('click', addTask);

function addTask() {
  try {
    if (inputElem.value === '') {
      // throw new Error('Write task.');
      errorMessageElm.innerText = 'Write your task then click add.';
      return;
    }
    errorMessageElm.innerText = '';
    let liElm = document.createElement('li');
    liElm.innerHTML = inputElem.value;
    listContainerElm.appendChild(liElm);
    let spanElem = document.createElement('span');
    spanElem.innerHTML = '\u00d7';
    liElm.appendChild(spanElem);
    // console.log(spanElem);
    inputElem.value = '';
    saveData();
  } catch (error) {
    alert(error);
  }
}

listContainerElm.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
    errorMessageElm.innerText = '';
    saveData();
  } else if (event.target.tagName === 'SPAN') {
    event.target.parentElement.remove();
    errorMessageElm.innerText = '';
    saveData();
  }
});

function saveData() {
  localStorage.setItem('data', listContainerElm.innerHTML);
}

function displayTask() {
  listContainerElm.innerHTML = localStorage.getItem('data');
}
displayTask();
