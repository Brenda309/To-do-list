import './index.css';
import { Tasks, addList, display } from './functions.js';
import Todos from './class.js';
import Enter from './enter.png';
import Refresh from './refresh.png';

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
// display items
display();

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
// update index
const updateIndex = () => {
  storage.array.forEach((todos, index) => {
    todos.index = index + 1;
  });
  const stringData = JSON.stringify(storage.array);
  localStorage.setItem('Tasks', stringData);
};
updateIndex();

// Edit and update tasks in the localStorage;
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
updateTask();
for (let i = 0; i < storage.array.length; i += 1) {
  const checkbox = document.getElementById(`box${i}`);
  checkbox.addEventListener('change', () => {
    if (storage.array[i].complete === false) {
      storage.array[i].complete = true;
      const stringData = JSON.stringify(storage.array);
      localStorage.setItem('Tasks', stringData);
      const list = document.getElementById(`list${i}`);
      list.style.textDecoration = 'line-through';
    } else if (storage.array[i].complete === true) {
      storage.array[i].completed = false;
      const stringData = JSON.stringify(storage.array);
      localStorage.setItem('Tasks', stringData);
      const lists = document.getElementById(`list${i}`);
      lists.style.textDecoration = 'none';
    }
  });
}
const clearm = document.getElementById('clear');
clearm.addEventListener('click', () => {
  const filtered = storage.array.filter((items) => items.completed === false);
  const stringData = JSON.stringify(filtered);
  for (let i = 0; i < storage.array.length; i += 1) {
    const listedItem = document.getElementById(`item${i}`);
    listedItem.remove();
  }
  localStorage.setItem('Tasks', stringData);
  const rmv = document.querySelector('.trashIcon');
  rmv.style.display = 'none';
  updateTask();
  updateIndex();
});
const refresh = document.getElementById('header');
const form = document.getElementById('list');
const rotate = new Image();
const inter = new Image();
inter.src = Enter;
inter.className = 'enter';
rotate.src = Refresh;
rotate.className = 'rotate';
form.appendChild(inter);
refresh.appendChild(rotate);
