import React, { useRef, useState } from 'react';
import verificarTarefa from '../../utilidades/verificarTarefa';
import './EntradaDeTarefa.css'

function EntradaDeTarefa({ adicionarTarefa, tarefas }) {
    const [valorDoInput, setValorDoInput] = useState('');
    const inputRef = useRef(null);

    const tratarValorDoInput = (e) => {
        e.preventDefault()

        const tarefaValida = verificarTarefa(valorDoInput, tarefas);
        if (tarefaValida) {
            setValorDoInput('')
            inputRef.current.focus();
            adicionarTarefa(valorDoInput)
        }
    }

    return (
        <form id="addTarefa" onSubmit={tratarValorDoInput}>
            <input
                type="text"
                id="inputAddTarefa"
                placeholder="Digite a tarefa"
                value={valorDoInput}
                onChange={(e) => setValorDoInput(e.target.value)}
                ref={inputRef}
                autoFocus
            />
            <button type="submit" id="btnAddTarefa">Adicionar</button>
        </form>
    );
}

export default EntradaDeTarefa;