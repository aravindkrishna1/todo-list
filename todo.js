function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    if (taskInput.value.trim() !== '') {
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        const span = document.createElement('span');
        
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                listItem.classList.add('completed');
            } else {
                listItem.classList.remove('completed');
            }
        });
        
        span.textContent = taskInput.value;
        
        listItem.appendChild(checkbox);
        listItem.appendChild(span);
        taskList.appendChild(listItem);
        
        taskInput.value = '';
        taskInput.focus();
    }
}


