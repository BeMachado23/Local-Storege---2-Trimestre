
function adicionar() {
    var tarefa = document.getElementById('tarefa_input').value
    let lista = document.getElementById('lista')

    if(tarefa != ''){
        var novaTarefa = document.createElement('li')
        var id = tarefa+Math.floor(Math.random() * 1000000000)
        novaTarefa.setAttribute('id', id)

        novaTarefa.innerHTML = tarefa

        var deleteBtn = document.createElement('button')
        deleteBtn.setAttribute('onclick', `deletarTarefa(${id})`)
        deleteBtn.setAttribute('class', 'btn-delete')
        deleteBtn.innerHTML = 'Deletar'

        lista.appendChild(novaTarefa)

        // lista.appendChild(novaTarefa)
        // novaTarefa.appendChild(deleteBtn)

    }
}

function deletarTarefa(id){
lista.removeChild(id)
}