let taskList = [];

document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    let taskInput = document.getElementById('task-input');
    let task = taskInput.value.trim();
    if (task) {
        taskList.push({ text: task, completed: false });
        renderTaskList();
        taskInput.value = '';
    }
}

function renderTaskList() {
    let taskListHTML = '';
    taskList.forEach((task, index) => {
        taskListHTML += `
            <li class="task ${task.completed ? 'completed' : ''}">
                <input type="checkbox" id="task-${index}" ${task.completed ? 'checked' : ''}>
                <label for="task-${index}">${task.text}</label>
                <button class="delete-btn" data-index="${index}">X</button>
            </li>
        `;
    });
    document.getElementById('task-list').innerHTML = taskListHTML;
}

document.getElementById('task-list').addEventListener('click', (e) => {
    if (e.target.tagName === 'INPUT') {
        let index = e.target.id.split('-')[1];
        taskList[index].completed = !taskList[index].completed;
        renderTaskList();
    } else if (e.target.classList.contains('delete-btn')) {
        let index = e.target.dataset.index;
        taskList.splice(index, 1);
        renderTaskList();
    }
});

renderTaskList();   