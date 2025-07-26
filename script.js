document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');
    
    // Load todos from localStorage
    loadTodos();
    
    // Add todo event
    addBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
    
    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            // Create new todo item
            const li = document.createElement('li');
            li.className = 'todo-item';
            
            const span = document.createElement('span');
            span.textContent = todoText;
            
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', function() {
                li.remove();
                saveTodos();
            });
            
            li.appendChild(span);
            li.appendChild(deleteBtn);
            todoList.appendChild(li);
            
            // Clear input
            todoInput.value = '';
            
            // Save to localStorage
            saveTodos();
        }
    }
    
    function saveTodos() {
        const todos = [];
        document.querySelectorAll('.todo-item span').forEach(function(todo) {
            todos.push(todo.textContent);
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    }
    
    function loadTodos() {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.forEach(function(todoText) {
            const li = document.createElement('li');
            li.className = 'todo-item';
            
            const span = document.createElement('span');
            span.textContent = todoText;
            
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', function() {
                li.remove();
                saveTodos();
            });
            
            li.appendChild(span);
            li.appendChild(deleteBtn);
            todoList.appendChild(li);
        });
    }
});
