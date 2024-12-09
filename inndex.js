




  function addTask() {
    const input = document.getElementById('todo-input');
    const taskText = input.value;
    if (taskText ==="" )[
        alert("Enter some Task")
    ]
    else{
        const li = document.createElement('li');
        li.innerHTML = `
            ${taskText}
            <button class="edit" onclick="editTask(this)">Edit</button>
            <button class="delete" onclick="deleteTask(this)">Delete</button>`;
        document.getElementById('todo-list').appendChild(li);
        input.value = '';
    }

}
function editTask(button) {
    const li = button.parentElement;
    const newTask = prompt('Edit your task:', li);
    if (newTask !== null && newTask  !== '') {
        li.firstChild.textContent = newTask;
    }
}


function deleteTask(button) {
    const li = button.parentElement;
    alert('Are you confirm delete:', li);
    li.remove();

}