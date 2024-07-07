const verificarTarefa = (textoTarefa, tarefas) => {
    if (textoTarefa.trim() === '') {
        alert("Adicione uma tarefa válida!");
        return false;
    }
    const essaTarefaJaExiste = tarefas.some(item => item.texto.toLowerCase() === textoTarefa.toLowerCase());
    if (essaTarefaJaExiste) {
        alert("Essa tarefa já existe!");
        return false;
    }
    return true;
};

export default verificarTarefa