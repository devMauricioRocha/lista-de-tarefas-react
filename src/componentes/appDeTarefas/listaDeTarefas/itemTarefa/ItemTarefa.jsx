import React, { useRef } from 'react';
import './ItemTarefa.css'
import { MdOutlineDeleteSweep, MdCancelPresentation, MdOutlineSave } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { gsap } from "gsap"

function ItemTarefa({ tarefa, index, editar, indiceEditando, textoEditado, setTextoEditado,
    excluirTarefa, editarTarefa, salvarEdicao, cancelarEdicao, lidarComStatusSelect, filtroTexto, filtroStatus }) {

    const refTarefa = useRef(null)

    const filtroItem = () => {
        const textoFiltrado = filtroTexto.trim() && !tarefa.texto.toLowerCase().includes(filtroTexto.toLowerCase());
        const statusFiltrado = filtroStatus && !tarefa.select.status.includes(filtroStatus);

        return textoFiltrado || statusFiltrado ? "ocultar" : null;
    }

    const animarDelete = (index) => {
        gsap.to(refTarefa.current, {
            backgroundColor: '#ff00045',
            duration: 0.4,
            scale: 1.2,
            repeat: 1,
            yoyo: true,
            onComplete: () => {
                excluirTarefa(index)
            }
        })
    }

    return (
        <tr
            className={filtroItem()}
            ref={refTarefa}
        >
            {editar && indiceEditando === index ? (
                <td style={{ padding: "3px" }}>
                    <input
                        type="text"
                        value={textoEditado}
                        placeholder="Nova Tarefa"
                        onChange={e => setTextoEditado(e.target.value)}
                        onKeyDown={e => (e.key === "Enter" ? salvarEdicao(index) : null)}
                        style={{ padding: "5px", width: "100%" }}
                        autoFocus
                    />
                </td>
            ) : (
                <td>{tarefa.texto}</td>
            )}
            <td>{tarefa.data}</td>
            <td>
                <select
                    value={tarefa.select.status}
                    onChange={(e) => lidarComStatusSelect(index, e.target.value)}
                    style={{ backgroundColor: tarefa.select.cor }}
                >
                    <option value="andamento">Em andamento</option>
                    <option value="concluido">Concluído</option>
                    <option value="pendente">Pendente</option>
                </select>
            </td>
            <td style={{ padding: "3px" }}>
                {editar && indiceEditando === index ? (
                    <div className="edicao botoes-acoes">
                        <button id="btnSalvar" title="Salvar" onClick={() => salvarEdicao(index)}>
                            <MdOutlineSave />
                        </button>
                        <button id="btnCancelar" title="Cancelar Edição" onClick={cancelarEdicao}>
                            <MdCancelPresentation />
                        </button>
                    </div>
                ) : (
                    <div className="botoes-acoes">
                        <button id="btnEditar" title="Editar" onClick={() => editarTarefa(index)}>
                            <FaRegEdit />
                        </button>
                        <button id="btnExcluir" title="Excluir" onClick={() => animarDelete(index)}>
                            <MdOutlineDeleteSweep />
                        </button>
                    </div>
                )}
            </td>
        </tr>
    );
}

export default ItemTarefa;