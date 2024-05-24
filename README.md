### Documentation of the Mini-Framework and the Todo List Application

#### Introduction

This documentation details the mini-framework designed to simplify DOM manipulation, as well as the Todo List application that uses it to create an interactive task list.

#### File `framework.js`

##### Class `MyFramework`

The `MyFramework` class provides methods to efficiently manipulate the DOM.

```javascript
class MyFramework {
  constructor() {
    // Initialization code...
  }

  createElement(tagName, attributes = {}, content = '') {
    const element = document.createElement(tagName);
    for (const key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
    element.textContent = content;
    return element;
  }

  addElement(parent, child) {
    parent.appendChild(child);
  }

  modifyElementContent(element, newContent) {
    element.textContent = newContent;
  }

  addEvent(element, eventType, eventHandler) {
    element.addEventListener(eventType, eventHandler);
  }

  // ... Other methods ...
}
```

#### File `addTask.js`

##### Function `addTask(taskList)`

The `addTask(taskList)` function adds tasks to the list using the mini-framework.

```javascript
import { MyFramework } from './framework.js';

export function addTask(taskList) {
  const framework = new MyFramework();

  const addTaskButton = document.getElementById('add-task-button');
  const taskInput = document.getElementById('task-input');

  const handleAddTask = () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
      const taskItem = framework.createElement('li', { class: 'task-item' }, taskText);
      const deleteButton = framework.createElement('button', { class: 'delete-button' }, 'Delete');
      const checkbox = framework.createElement('input', { type: 'checkbox', class: 'task-checkbox' });

      framework.addElement(taskItem, checkbox);
      framework.addElement(taskItem, deleteButton);
      framework.addElement(taskList, taskItem);

      taskInput.value = '';

      framework.addEvent(deleteButton, 'click', () => {
        taskList.removeChild(taskItem);
      });

      framework.addEvent(taskItem, 'dblclick', () => {
        const newTaskText = prompt('Edit task:', taskText);
        if (newTaskText !== null) {
          framework.modifyElementContent(taskItem, newTaskText);
          framework.addElement(taskItem, checkbox);
          framework.addElement(taskItem, deleteButton);
        }
      });
    }
  };

  framework.addEvent(addTaskButton, 'click', handleAddTask);
}
```

#### File `main.js`

##### Function `update()`

Updates the display based on the current state of the tasks.

##### Function `countVisibleElements(selector)`

Counts the number of visible elements matching the given selector.

```javascript
import { addTask } from './addTask.js';

const taskList = document.getElementById('task-list');

function update() {
  // Implementation to update the task list display...
}

function countVisibleElements(selector) {
  const elements = document.querySelectorAll(selector);
  let count = 0;
  elements.forEach(element => {
    if (element.offsetParent !== null) {
      count++;
    }
  });
  return count;
}

// Event handlers
document.getElementById('add-task-button').addEventListener('click', () => {
  addTask(taskList);
});

document.getElementById('task-input').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask(taskList);
  }
});

document.getElementById('filter-all').addEventListener('click', () => {
  // Show all tasks
});

document.getElementById('filter-active').addEventListener('click', () => {
  // Show active tasks
});

document.getElementById('filter-completed').addEventListener('click', () => {
  // Show completed tasks
});

document.getElementById('clear-completed').addEventListener('click', () => {
  // Clear completed tasks
});
```

#### File `index.html`

Contains the HTML structure of the Todo List application.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/main.css">
  <title>Todo List</title>
</head>
<body>
  <div class="todos" id="main">
    <input type="text" id="task-input" placeholder="Add a new task">
    <button id="add-task-button">Add Task</button>
    <ul id="task-list"></ul>
    <button id="filter-all">All</button>
    <button id="filter-active">Active</button>
    <button id="filter-completed">Completed</button>
    <button id="clear-completed">Clear Completed</button>
    <span id="count" class="countAfaire"></span>
  </div>
  <script type="module" src="main.js"></script>
</body>
</html>
```

#### File `main.css`

Contains the styles for the Todo List application.

```css
/* Styles for the Todo List application */
body {
  font-family: Arial, sans-serif;
}

#count {
  font-weight: bold;
}

.countAfaire {
  color: red;
}

/* Additional styles... */
```

### Usage

To create an interactive Todo List application, follow these steps:

1. **Include the `framework.js` file** to access the DOM manipulation features.
2. **Use the `addTask(taskList)` function** from the `addTask.js` file to manage the addition, deletion, and interactions with tasks.
3. **Use the event handlers** from the `main.js` file to update the display in response to user actions.
4. **Integrate the HTML structure** from the `index.html` file into your application.