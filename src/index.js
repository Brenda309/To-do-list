/* eslint-disable*/
import './index.css';
import Icon from './icon.png';
import Bin from './bin.png';
import Edit from './pen.png';
const addList = document.getElementById('add-list');
const newList = document.getElementById('newList');

class Tasks {
  constructor() {
    this.array = [];
  }
}

class Todos {
  constructor (description, complete, index) {
  this.description = description;
  this.complete = complete;
  this.index = index;
}
}

const storage = new Tasks();


  if (localStorage.Tasks) {
    storage.array = JSON.parse(localStorage.Tasks);
  }
 

addList.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const newTasks = new Todos();
    newTasks.description = addList.value;
    newTasks.complete = false;
    newTasks.index = `${storage.array.length + 1}`;
    storage.array.push(newTasks);
    newTasks.value = ' ';
    const stringData = JSON.stringify(storage.array);
    localStorage.setItem('Tasks', stringData);
    window.location.reload();
  }
});

if (localStorage.Tasks) {
  for (let i = 0; i < JSON.parse(localStorage.Tasks).length; i += 1) {
    const newCheckbox = document.createElement('input');
    const newLabel = document.createElement('label');
    const myIcon = new Image();
    const lineBreak = document.createElement('br');
    const line = document.createElement('hr');
    const trashIcon = new Image();
    const todo = document.createElement('div');

    todo.id = `item${i}`;
    newCheckbox.setAttribute('type', 'checkbox');
    newCheckbox.setAttribute('id', `${i}`);
    newLabel.setAttribute('for', 'checkbox');
    newLabel.innerHTML = JSON.parse(localStorage.Tasks)[i].description;
    trashIcon.className = 'trashIcon';
    trashIcon.id = `rmv${i}`
    myIcon.className = 'icon';
    myIcon.src = Icon;
    trashIcon.src = Bin;
    newLabel.appendChild(myIcon);
    newLabel.appendChild(trashIcon);
    todo.appendChild(line);
    todo.appendChild(lineBreak);
    todo.appendChild(newCheckbox);
    todo.appendChild(newLabel);
    newList.appendChild(todo)
  }
}


const remove = document.querySelector('.trashIcon');
for (let i = 0; i < storage.array.length; i += 1){
const rmv = document.getElementById(`rmv${i}`);
const descriptionName =  storage.array[i].description;
const deleteItem = document.getElementById(`item${i}`);
rmv.addEventListener('click', () => {
const filtered = storage.array.filter((Tasks) => Tasks.description !== descriptionName);
  const stringData = JSON.stringify(filtered);
      localStorage.setItem('Tasks', stringData);
      deleteItem.remove();
      window.location.reload();
})
}