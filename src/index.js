/* eslint-disable*/
import './index.css';
import {Tasks, addList,display} from './functions';
import Todos from './class.js';
import { update } from 'lodash';
// import { update } from 'lodash';


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
//display items
display();

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

 const updateIndex = () => {
  storage.array.forEach((todos, index) => {
todos.index = index + 1;
  })
const stringData = JSON.stringify(storage.array);
    localStorage.setItem('Tasks', stringData);
   }
 updateIndex();
 
const updateTask = () => {
const list = document.getElementsByClassName('list');
for (let i = 0; i < list.length; i += 1){
  list[i].addEventListener('change', () => {
    storage.array[i].description = list[i].value;
    const stringData = JSON.stringify(storage.array);
        localStorage.setItem('tasks', stringData)
        window.location.reload();
  })
}
}
updateTask();