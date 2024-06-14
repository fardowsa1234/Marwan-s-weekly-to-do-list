document.getElementById('add-task-button').addEventListener('click', addTask);
document.getElementById('new-task-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('new-task-input');
    const taskDate = document.getElementById('task-date').value;
    const taskTime = document.getElementById('task-time').value;
    const taskPriority = document.getElementById('task-priority').value;
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');

    const spanText = document.createElement('span');
    spanText.className = 'task-text';
    spanText.textContent = taskText;
    spanText.addEventListener('click', toggleTaskCompletion);

    const spanDate = document.createElement('span');
    spanDate.className = 'task-date';
    spanDate.textContent = taskDate;

    const spanTime = document.createElement('span');
    spanTime.className = 'task-time';
    spanTime.textContent = taskTime;

    const spanPriority = document.createElement('span');
    spanPriority.className = 'task-priority';
    spanPriority.textContent = taskPriority;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    li.appendChild(spanText);
    li.appendChild(spanDate);
    li.appendChild(spanTime);
    li.appendChild(spanPriority);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = '';
    document.getElementById('task-date').value = '';
    document.getElementById('task-time').value = '';
    document.getElementById('task-priority').value = 'Low';
}

function toggleTaskCompletion(event) {
    event.target.classList.toggle('completed');
}
