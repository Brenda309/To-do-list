import './index.css';

const form = document.getElementById('form');
const tasks = [
  {
    desc: 'microverse recap',
    completed: true,
    index: 0,
  },
  {
    desc: 'reading',
    completed: false,
    index: 1,
  },
  {
    desc: 'exercises',
    completed: false,
    index: 0,
  },
];

for (let i = 0; i < tasks.length; i += 1) {
  const newCheckbox = document.createElement('input');
  newCheckbox.setAttribute('type', 'checkbox');
  newCheckbox.setAttribute('id', 'checkbox');
  const newLabel = document.createElement('label');
  newLabel.setAttribute('for', 'checkbox');
  newLabel.innerHTML = tasks[i].desc;
  const lineBreak = document.createElement('br');
  const line = document.createElement('hr');
  form.appendChild(line);
  form.appendChild(lineBreak);
  form.appendChild(newCheckbox);
  form.appendChild(newLabel);
}