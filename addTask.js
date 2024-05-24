import { update } from "./main.js";
import { MyFramework } from "./framework.js";

const myFramework = new MyFramework();

export function addTask(taskList) {
  document.querySelector('a').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent the default behavior of the link
    // Your code here
  });

  const taskInput = document.querySelector('.aFaire');
  const list = document.querySelector('.Liste');
  const countStr = document.querySelector('#count');
  let count = 0;
  countStr.textContent = count;
  if (countStr !== null) {
    count = parseInt(countStr.innerText);
  } else {
    console.error('Element with id "count" not found!');
  }

  const taskItem = myFramework.createElement('li', { class: 'all-active' });
  const taskDiv = myFramework.createElement('div', { class: 'task' });
  const textDiv = myFramework.createElement('div', { class: 'task-text' }, taskInput.value);
  const checkboxDiv = myFramework.createElement('div', { class: 'checkbox' });
  const deleteDiv = myFramework.createElement('div', { class: 'delete-button' });

  myFramework.addElement(taskItem, taskDiv);
  myFramework.addElement(taskDiv, textDiv);
  myFramework.addElement(taskDiv, checkboxDiv);
  myFramework.addElement(taskDiv, deleteDiv);

  const checkbox = myFramework.createElement('input', { type: 'checkbox' });
  const deleteButton = myFramework.createElement('button', { class: 'delete-button' });
  deleteButton.innerHTML = '&#10005;';
  
  myFramework.addElement(checkboxDiv, checkbox);
  myFramework.addElement(deleteDiv, deleteButton);
  
  myFramework.setStyle(taskDiv, { display: 'flex', alignItems: 'center' });
  myFramework.setStyle(textDiv, { marginRight: '10px' });
  myFramework.setStyle(checkboxDiv, { marginRight: '10px' });

  if (taskInput.value.length > 0) {
    myFramework.addElement(list, taskItem);
    myFramework.setStyle(deleteButton, { marginLeft: '10px' });
    
    deleteButton.addEventListener('click', function() {
      myFramework.removeElement(list, taskItem);
      const checkedElements = list.querySelectorAll('li.all-active');
      const checkedCount = checkedElements.length;
      console.log("Number of checked elements: " + checkedCount);
      countStr.textContent = checkedCount;
      update();
    });
  }
}
