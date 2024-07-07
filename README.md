# Aplicativo de Lista de Tarefas em React

Este é um simples aplicativo de lista de tarefas desenvolvido em React, onde os usuários podem adicionar, editar, filtrar e excluir tarefas. As tarefas são salvas localmente no navegador utilizando o localStorage.

## Funcionalidades Principais

- Adicionar novas tarefas com data de criação automática.
- Editar tarefas existentes.
- Filtrar tarefas por texto e status.
- Alterar o status das tarefas entre pendente, em andamento e concluído.
- Excluir tarefas individualmente ou todas de uma vez.

## Tecnologias Utilizadas

- React
- CSS (estilos separados para cada componente)

## Estrutura do Projeto

- `public/`: Contém o arquivo `icon-tarefa.png` e o arquivo `index.html`.
- `src/`: Contém o código fonte do projeto.
  - `AppDeTarefas.js`: Componente principal que gerencia o estado das tarefas e renderiza a interface.
  - `entradaDeTarefa/`: Componente para a entrada de novas tarefas.
  - `listaDeTarefas/`: Componente para exibição e manipulação da lista de tarefas.
    - `ItemTarefa.js`: Componente que representa cada item de tarefa na lista, responsável por exibir e manipular uma tarefa individual.

## Armazenamento Local

As tarefas são armazenadas localmente utilizando o `localStorage` do navegador. Elas são carregadas ao iniciar o aplicativo e são salvas automaticamente sempre que há uma alteração.

## Como Usar

1. Clone o repositório.
2. Instale as dependências usando `npm install`.
3. Inicie o servidor de desenvolvimento com `npm start`.
4. Acesse o aplicativo no navegador usando o endereço fornecido pelo servidor de desenvolvimento.

Certifique-se de ter o Node.js e o npm instalados localmente.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (`issues`) ou enviar `pull requests` para melhorar o projeto.