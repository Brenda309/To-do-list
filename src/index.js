import {
  addList,
  display,
  storage,
  remove,
  updateIndex,
  updateTask,
  clearLocalStorage,
  allComplete,
  storeData,
}
from './modules/display.js';
import './index.css';
import Enter from './enter.png';
import Refresh from './refresh.png';
import Todos from './modules/classObj.js';

storeData();
// add to local storage

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

// import display function
display();

// imported remove function
remove();

// update index of tasks when the task is removed in the local storage
updateIndex();

// function that update the tasks value in the local storage when it is edit.
updateTask();

// add a cross line when the tasks are equal to true
clearLocalStorage();

// clear all completed ones
allComplete();

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