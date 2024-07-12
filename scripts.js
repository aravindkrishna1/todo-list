document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const authorizedEmail = 'dkboys@gmail.com';
    const authorizedPassword = 'Parvathy';

    const errorMessage = document.getElementById('error-message');

    if (email === authorizedEmail && password === authorizedPassword) {
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('home-page').style.display = 'flex';
        errorMessage.style.display = 'none'; // Hide error message if login is successful
    } else {
        errorMessage.style.display = 'block'; // Show error message if login fails
        errorMessage.textContent = 'Invalid email or password';
    }
});

document.getElementById('add-task').addEventListener('click', function() {
    const newTaskInput = document.getElementById('new-task');
    const newTaskText = newTaskInput.value.trim();

    if (newTaskText !== '') {
        const todoList = document.getElementById('todo-list');

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${newTaskText}</span>
            <span class="checkmark">&#10003;</span>
        `;
        
        li.querySelector('.checkmark').addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        todoList.appendChild(li);
        newTaskInput.value = '';
    }
});
