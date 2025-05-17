//TODO 📚 Module 4 - Lesson 02.03.02 Creating a Function - Task Manager App

const taskInput = document.getElementById('task-input');
const taskButton = document.getElementById('task-btn');
const taskList = document.getElementById('task-list');

taskButton.addEventListener('click', function() {
    const textValue = taskInput.value.trim();

    if (textValue === '') {
        window.alert('Your input field is empty.');
    } else {
        // Create wrapper div for a task
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';

        // Create task text
        const taskText = document.createElement('span');
        taskText.className = 'task-text';
        taskText.textContent = textValue;

        // Create checkbox
        const taskCheckbox = document.createElement('input');
        taskCheckbox.type = 'checkbox';
        taskCheckbox.addEventListener('click', function() {
            taskText.classList.toggle('completed')
        })

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', function() {
            taskDiv.remove();
            })

        // Add all pieces to taskDiv
        taskDiv.appendChild(taskText);
        taskDiv.appendChild(taskCheckbox);
        taskDiv.appendChild(deleteButton);
        
        // Add taskDiv to task list
        taskList.appendChild(taskDiv);

        // Clear input after adding
        taskInput.value = '';
    }
});

// Constants for the filter buttons

const allBtn = document.getElementById('all-btn');
const todoBtn = document.getElementById('todo-btn');
const doneBtn = document.getElementById('done-btn');

// Event listeners for each button
//  Loop through all task elements and check each checkbox inside it

allBtn.addEventListener('click', function() {
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task => {
        task.style.display = 'flex';
    });
});

todoBtn.addEventListener('click', function() {
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task => {
        const checkbox = task.querySelector("input[type = 'checkbox']");
        if (checkbox) {
            if (checkbox.checked) {
                task.style.display = 'none';
            } else {
                task.style.display = 'flex';
            };
        };
    });
});

doneBtn.addEventListener('click', function() {
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task => {
        const checkbox = task.querySelector("input[type = 'checkbox']");
        if (checkbox) {
            if (checkbox.checked) {
                task.style.display = 'flex';
            } else {
                task.style.display = 'none';
            };
        };
    });
});

//  Clear .active from all three buttons

function clearActive() {
    allBtn.classList.remove('active');
    todoBtn.classList.remove('active');
    doneBtn.classList.remove('active');
}

clearActive();
allBtn.classList.add('active');
























