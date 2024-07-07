import React, { useEffect, useState } from "react";
import './AppDeTarefas.css';

import EntradaDeTarefa from './entradaDeTarefa/EntradaDeTarefa';
import ListaDeTarefas from './listaDeTarefas/ListaDeTarefas';
import formatarData from "../utilidades/formatarData";
import verificarTarefa from "../utilidades/verificarTarefa";

function AppDeTarefas() {
    const [tarefas, setTarefas] = useState([]);
    const [editar, setEditar] = useState(false);
    const [indiceEditando, setIndiceEditando] = useState(null);
    const [textoEditado, setTextoEditado] = useState('');
    const [filtroTexto, setFiltroTexto] = useState('');
    const [filtroStatus, setFiltroStatus] = useState('')
    const [tarefasCarregadas, setTarefasCarregadas] = useState(false);

    useEffect(() => {
        setTarefas(JSON.parse(localStorage.getItem("tarefas")) || []);
        setTarefasCarregadas(true)
    }, []);

    useEffect(() => {
        if (tarefasCarregadas) {
            localStorage.setItem("tarefas", JSON.stringify(tarefas));
        }
    }, [tarefas]);


    const adicionarTarefa = (textoTarefa) => {
        const data = formatarData(new Date());
        setTarefas(tarefasAnteriores => [...tarefasAnteriores,
        { texto: textoTarefa, data: data, select: { status: "pendente", cor: "#FFD700" } }]);

    };

    const excluirTarefa = (index) => {
        setTarefas(tarefasAnteriores => {
            const atualizarTarefas = [...tarefasAnteriores];
            atualizarTarefas.splice(index, 1);
            return atualizarTarefas;
        });
    };

    const excluirTodasTarefas = () => {
        if (tarefas.length === 0) {
            alert("Não existem tarefas para excluir!");
            return;
        }
        const excluirTudo = window.confirm("Deseja excluir todas as tarefas?");
        if (excluirTudo) {
            setTarefas([]);
            setFiltroTexto("")
            setFiltroStatus("")
        }
    };

    const editarTarefa = (index) => {
        setEditar(true);
        setIndiceEditando(index);
        // setTextoEditado(tarefas[index].texto);  começar com o antigo testo
    };

    const salvarEdicao = (index) => {
        const tarefaValida = verificarTarefa(textoEditado, tarefas);
        if (tarefaValida) {
            setTarefas(tarefasAnteriores => {
                const atualizarTarefas = [...tarefasAnteriores];
                atualizarTarefas[index].texto = textoEditado;
                atualizarTarefas[index].data = formatarData(new Date());
                setEditar(false);
                setTextoEditado('');
                setIndiceEditando(null);
                return atualizarTarefas;
            });
        }
    };

    const cancelarEdicao = () => {
        setEditar(false);
        setIndiceEditando(null);
        setTextoEditado('');
    };

    const lidarComStatusSelect = (index, novoStatus) => {
        const atualizarStatus = [...tarefas];
        atualizarStatus[index].select.status = novoStatus;
        switch (novoStatus) {
            case "andamento":
                atualizarStatus[index].select.cor = "#00d1ff";
                break;
            case "concluido":
                atualizarStatus[index].select.cor = "#32CD32";
                break;
            default:
                atualizarStatus[index].select.cor = "#FFD700";
                break;
        }
        setTarefas(atualizarStatus);
    };

    return (
        <main>
            <div className="container">
                <h1>Lista de Tarefas</h1>
                <EntradaDeTarefa
                    adicionarTarefa={adicionarTarefa}
                    tarefas={tarefas}
                />

                <div className="filtro">
                    <input
                        type="search"
                        value={filtroTexto}
                        onChange={(e) => setFiltroTexto(e.target.value)}
                        placeholder="Filtrar tarefas"
                    />
                    <label htmlFor="filtroStatus">Filtrar por Status</label>
                    <select
                        id="filtroStatus"
                        name="fitlroStatus"
                        value={filtroStatus}
                        onChange={(e) => setFiltroStatus(e.target.value)}
                    >
                        <option value="">Nenhum</option>
                        <option value="andamento">Em Andamento</option>
                        <option value="concluido">Concluido</option>
                        <option value="pendente">Pendente</option>
                    </select>
                </div>
                <button id="excluirTudo" onClick={excluirTodasTarefas}>Excluir Tudo</button>
                <ListaDeTarefas
                    tarefas={tarefas}
                    filtroTexto={filtroTexto}
                    filtroStatus={filtroStatus}
                    editar={editar}
                    indiceEditando={indiceEditando}
                    textoEditado={textoEditado}
                    setTextoEditado={setTextoEditado}
                    excluirTarefa={excluirTarefa}
                    editarTarefa={editarTarefa}
                    salvarEdicao={salvarEdicao}
                    cancelarEdicao={cancelarEdicao}
                    lidarComStatusSelect={lidarComStatusSelect}
                />
            </div>
        </main>
    );
}

export default AppDeTarefas;
