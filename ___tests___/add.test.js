import Tasks from '../src/modules/display.js';
import { addItem } from '../src/index.js';

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
describe('Add function', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <div id="mylist" class="mylist">
      <form id="list">
        <input type="text" name="todo" class="add" id="add-list" placeholder="Add to your list...">
      </form>
    </div>
    <div id = 'newList'></div>`;

    localStorage.clear();
    jest.clearAllMocks();
    localStorage.setItem.mockClear();
  });

  test('Add task to the the localStorage', () => {
    const inputForm = document.querySelector('#add-list');
    const event = {
      target: document.querySelector('.#add-list'),
    };

    expect(JSON.parse(localStorage.getItem('Tasks'))).toBeNull();

    
    addItem(event);
    expect(JSON.parse(localStorage.getItem('Tasks')).length).toBe(1);
  });
});
