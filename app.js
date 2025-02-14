// Armazenamento
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Função para salvar tarefas no Local Storage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Função para adicionar nova tarefa
function addTask(task) {
    tasks.push(task);
    saveTasks();
}

// Função para excluir uma tarefa
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();  // Re-renderiza a lista de tarefas
}

// Função para atualizar uma tarefa
function updateTask(updatedTask) {
    tasks = tasks.map(task => task.id === updatedTask.id ? updatedTask : task);
    saveTasks();
    renderTasks();  // Re-renderiza a lista de tarefas
}

// Função para renderizar a lista de tarefas
function renderTasks() {
    const taskList = document.getElementById('taskList');
    if (!taskList) return; // Verifica se a div existe
    taskList.innerHTML = '';
    
    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.className = 'card mb-2';
        taskElement.innerHTML = `
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <div>
                        <h5 class="${task.completed ? 'text-muted text-decoration-line-through' : ''}">
                            ${task.description}
                        </h5>
                        <small class="text-muted">
                            ${task.day}/${task.month}/${task.year} - ${getTaskTypeName(task.type)}
                        </small>
                    </div>
                    <div>
                        <button class="btn btn-sm btn-primary me-2" onclick="startEdit(${task.id})">
                            Edit
                        </button>
                        <button class="btn btn-sm btn-danger" onclick="deleteTask(${task.id})">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        `;
        taskList.appendChild(taskElement);
    });
}

function getTaskTypeName(type) {
    const types = {
        '1': 'Studies',
        '2': 'Work'
    };
    return types[type];
}

// Função de envio do formulário (adicionar ou atualizar tarefa)
function handleSubmit(e) {
    e.preventDefault();
    
    const newTask = {
        id: Date.now(),  // Gera um novo ID único
        year: document.getElementById('year').value,
        month: document.getElementById('month').value,
        day: document.getElementById('day').value,
        type: document.getElementById('type').value,
        description: document.getElementById('description').value,
        completed: false
    };

    addTask(newTask);  // Adiciona nova tarefa
    renderTasks();  // Re-renderiza a lista de tarefas
    e.target.reset();  // Reseta o formulário

    // Exibe um alerta informando que a tarefa foi salva
    alert("Task added successfully!");
}

// Função para iniciar a edição de uma tarefa
function startEdit(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        // Atualiza a tarefa com os dados editados
        const updatedTask = {
            ...task,
            description: prompt("Edit Task Description", task.description)
        };

        if (updatedTask.description && updatedTask.description !== task.description) {
            updateTask(updatedTask);  // Atualiza a tarefa
            alert("Task updated successfully!");  // Exibe o feedback de sucesso
        } else {
            alert("No changes made to the task.");  // Caso o usuário não altere nada
        }
    }
}

// Inicializa e renderiza tarefas ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    // Verifica se estamos na página de tarefas
    if (document.getElementById('taskForm')) {
        document.getElementById('taskForm').addEventListener('submit', handleSubmit);
    }
    
    // Verifica se estamos na página de listagem de tarefas
    if (document.getElementById('taskList')) {
        renderTasks();
    }
});
