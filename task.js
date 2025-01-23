let tarefas = [];

function adicionarTarefa() {
    const taskInput = document.getElementById("taskInput");
    const nomeTarefa = taskInput.value.trim();
    
    if (nomeTarefa === "") {
        alert("Digite uma tarefa válida!");
        return;
    }
    
    tarefas.push({ tarefa: nomeTarefa, concluida: false });
    taskInput.value = ""; // Limpa o input após adicionar a tarefa
    exibirTarefas(); // Exibe a lista de tarefas atualizada
}

function editarTarefa(indice) {
    const novaTarefa = prompt("Digite o novo nome da tarefa:", tarefas[indice].tarefa);
    if (novaTarefa && novaTarefa.trim() !== "") {
        tarefas[indice].tarefa = novaTarefa;
        exibirTarefas();
    }
}

function removerTarefa(indice) {
    if (confirm(`Você tem certeza que deseja remover a tarefa "${tarefas[indice].tarefa}"?`)) {
        tarefas.splice(indice, 1);
        exibirTarefas();
    }
}

function concluirTarefa(indice) {
    tarefas[indice].concluida = true;
    exibirTarefas();
}

function exibirTarefas() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Limpa a lista antes de exibir as tarefas novamente

    if (tarefas.length === 0) {
        taskList.innerHTML = "<li>Não há tarefas para exibir.</li>";
    } else {
        tarefas.forEach((tarefa, indice) => {
            const li = document.createElement("li");
            li.innerHTML = `
                ${tarefa.tarefa} - <strong>${tarefa.concluida ? "Concluída" : "Pendente"}</strong>
                <div class="actions">
                    <button onclick="editarTarefa(${indice})">Editar</button>
                    <button onclick="removerTarefa(${indice})">Remover</button>
                    <button onclick="concluirTarefa(${indice})">Concluir</button>
                </div>
            `;
            taskList.appendChild(li);
        });
    }
}
