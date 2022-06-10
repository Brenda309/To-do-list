import Tasks from '../src/modules/display.js';

const todo = new Tasks();
todo.array = [
  {
    description: 'Go to the Gym',
    completed: false,
    index: '1',
  },
  {
    description: 'Take Dog Out',
    completed: false,
    index: '2',
  },
  {
    description: 'LOL',
    completed: false,
    index: '3',
  }];
document.body.innerHTML = '<section class= "todo">'
  + ' <div id="mylist" class="mylist">'
  + '  <h1 id = "header">Today\'s To Do</h1>'
  + ' <form id="list">'
  + ' <input type="text" name="todo" id="add-list" placeholder="Add to your list...">'
  + '  </form> '
  + ' <hr> '
  + '   </div> '
  + ' <div id = "newList"></div>'
  + ' <button id="clear">clear all completed</button>'
  + '</section>';

describe('Add items', () => {
  test('Display items stored in localStorage', () => {
    /* eslint-disable */
    document.body.innerHTML;
    todos.display();
    const items = document.getElementsByClassName('list');
    expect(items.length).toBe(3);
  });
});