import Icon from '../icon.png';
import Bin from '../bin.png';

const addList = document.getElementById('add-list');
const newList = document.getElementById('newList');

export default class Tasks {
  constructor() {
    this.array = [];
  }
}

const storage = new Tasks();
const storeData = () => {
  if (localStorage.Tasks) {
    storage.array = JSON.parse(localStorage.Tasks);
  }
};
const display = () => {
  if (localStorage.Tasks) {
    for (let i = 0; i < JSON.parse(localStorage.Tasks).length; i += 1) {
      const div = document.createElement('div');
      const newCheckbox = document.createElement('input');
      const newLabel = document.createElement('input');
      const lineBreak = document.createElement('br');
      const line = document.createElement('hr');
      const myIcon = new Image();
      const trashIcon = new Image();
      const editIcon = new Image();
      const todo = document.createElement('div');

      todo.id = `item${i}`;
      newCheckbox.setAttribute('type', 'checkbox');
      newCheckbox.setAttribute('id', `box${i}`);
      newLabel.setAttribute('type', 'text');
      newLabel.value = JSON.parse(localStorage.Tasks)[i].description;
      newLabel.className = 'list';
      newLabel.id = `list${i}`;
      trashIcon.className = 'trashIcon';
      trashIcon.id = `rmv${i}`;
      myIcon.className = 'icon';
      myIcon.id = `icon${i}`;
      myIcon.src = Icon;
      trashIcon.src = Bin;
      div.appendChild(editIcon);
      div.appendChild(myIcon);
      div.appendChild(trashIcon);
      todo.appendChild(line);
      todo.appendChild(lineBreak);
      todo.appendChild(newCheckbox);
      todo.appendChild(newLabel);
      newList.appendChild(todo);
      newList.appendChild(div);
    }
  }
};
const remove = () => {
  for (let i = 0; i < storage.array.length; i += 1) {
    const rmv = document.getElementById(`rmv${i}`);
    const descriptionName = storage.array[i].description;
    const deleteItem = document.getElementById(`item${i}`);
    rmv.addEventListener('click', () => {
      const filtered = storage.array.filter((Tasks) => Tasks.description !== descriptionName);
      const stringData = JSON.stringify(filtered);
      localStorage.setItem('Tasks', stringData);
      deleteItem.remove();
      window.location.reload();
    });
  }
};

// update index
const updateIndex = () => {
  storage.array.forEach((todos, index) => {
    todos.index = index + 1;
  });
  const stringData = JSON.stringify(storage.array);
  localStorage.setItem('Tasks', stringData);
};
// function that update the tasks value in the local storage when it is edit.
const updateTask = () => {
  const list = document.getElementsByClassName('list');
  for (let i = 0; i < list.length; i += 1) {
    list[i].addEventListener('change', () => {
      storage.array[i].description = list[i].value;
      const stringData = JSON.stringify(storage.array);
      localStorage.setItem('Tasks', stringData);
      window.location.reload();
    });
  }
};
const clearLocalStorage = () => {
  for (let i = 0; i < storage.array.length; i += 1) {
    const checkbox = document.getElementById(`box${i}`);
    checkbox.addEventListener('change', () => {
      if (storage.array[i].complete === false) {
        storage.array[i].complete = true;
        const stringData = JSON.stringify(storage.array);
        localStorage.setItem('Tasks', stringData);
        updateTask();
        const list = document.getElementById(`list${i}`);
        list.style.textDecoration = 'line-through';
      } else if (storage.array[i].complete === true) {
        storage.array[i].completed = false;
        const stringData = JSON.stringify(storage.array);
        localStorage.setItem('Tasks', stringData);
        updateTask();
        const lists = document.getElementById(`list${i}`);
        lists.style.textDecoration = 'none';
      }
    });
  }
};

const allComplete = () => {
  const clear = document.getElementById('clear');
  clear.addEventListener('click', () => {
    const filtered = storage.array.filter((items) => items.complete === false);
    const stringData = JSON.stringify(filtered);
    for (let i = 0; i < storage.array.length; i += 1) {
      const listedItem = document.getElementById(`item${i}`);
      listedItem.remove();
    }
    localStorage.setItem('Tasks', stringData);
    const rmv = document.querySelector('.trashIcon');
    rmv.style.display = 'none';
    updateIndex();
    storeData();
  });
};
export {
  addList,
  display,
  remove,
  storage,
  updateIndex,
  updateTask,
  clearLocalStorage,
  allComplete,
  storeData,
};
