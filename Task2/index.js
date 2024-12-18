// To-Do List Application

// DOM Elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Array to store tasks
let tasks = [];

// Function to render tasks
function renderTasks() {
    taskList.innerHTML = ''; // Clear existing tasks
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.textContent = task.text;
        taskItem.className = task.completed ? 'completed' : '';

        // Toggle completion state
        taskItem.addEventListener('click', () => {
            tasks[index].completed = !tasks[index].completed;
            renderTasks();
        });

        // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            tasks.splice(index, 1);
            renderTasks();
        });

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
    });
}

// Add new task
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = ''; // Clear input field
        renderTasks();
    }
});

// Initial Render
renderTasks();