function addTask() {
    const taskInput = document.getElementById('task').value;

    if (taskInput.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');
    newTask.className = 'collection-item';
    newTask.innerHTML = `${taskInput} <button class="waves-effect waves-light btn remove" onclick="removeTask(this)" btn>Remove</button>`;
    taskList.appendChild(newTask);


    document.getElementById('task').value = '';
}

function removeTask(button) {
    const taskList = document.getElementById('taskList');
    const taskItem = button.parentNode;
    taskList.removeChild(taskItem);
}