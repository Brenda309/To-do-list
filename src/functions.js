/* eslint-disable*/
import Icon from './icon.png';
import Bin from './bin.png';
import Edit from './pen.png';


const display = () => {
if (localStorage.Tasks) {
  for (let i = 0; i < JSON.parse(localStorage.Tasks).length; i += 1) {
    const div = document.createElement('div')
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
    newCheckbox.setAttribute('id', `${i}`);
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
    editIcon.src = Edit;
    editIcon.className = 'iconEdit';
    div.appendChild(editIcon);
    div.appendChild(myIcon);
    div.appendChild(trashIcon);
    todo.appendChild(line);
    todo.appendChild(lineBreak);
    todo.appendChild(newCheckbox);
    todo.appendChild(newLabel);
    newList.appendChild(todo)
    newList.appendChild(div);
  }
}
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
export {display , updateIndex, updateTask};