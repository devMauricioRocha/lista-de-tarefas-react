import React from 'react';
import ItemTarefa from './itemTarefa/ItemTarefa';
import './ListaDeTarefas.css'

function ListaDeTarefas({ tarefas, editar, indiceEditando, textoEditado,
    setTextoEditado, excluirTarefa, editarTarefa,
    salvarEdicao, cancelarEdicao, lidarComStatusSelect, filtroTexto, filtroStatus }) {
    return (
        <>
            {tarefas.length > 0 ? (
                <>

                    <table>
                        <thead>
                            <tr>
                                <th>Tarefa</th>
                                <th>Criada em</th>
                                <th>Status</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tarefas.map((tarefa, index) => (
                                <ItemTarefa
                                    key={index}
                                    tarefa={tarefa}
                                    index={index}
                                    editar={editar}
                                    indiceEditando={indiceEditando}
                                    textoEditado={textoEditado}
                                    setTextoEditado={setTextoEditado}
                                    excluirTarefa={excluirTarefa}
                                    editarTarefa={editarTarefa}
                                    salvarEdicao={salvarEdicao}
                                    cancelarEdicao={cancelarEdicao}
                                    lidarComStatusSelect={lidarComStatusSelect}
                                    filtroTexto={filtroTexto}
                                    filtroStatus={filtroStatus}
                                />
                            ))}
                        </tbody>
                    </table>
                </>
            ) : (
                <div>
                    <h2>Adicione uma tarefa!</h2>

                </div>
            )}
        </>
    );
}

export default ListaDeTarefas;
