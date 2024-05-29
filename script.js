document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);
    taskList.addEventListener('click', deleteTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `${taskText} <button class="delete-button">Delete</button>`;
        taskList.appendChild(li);

        taskInput.value = '';
    }

    function deleteTask(e) {
        if (e.target.classList.contains('delete-button')) {
            const li = e.target.parentElement;
            taskList.removeChild(li);
        }
    }
});

