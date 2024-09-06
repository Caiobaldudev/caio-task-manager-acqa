![tasksbanner](https://github.com/user-attachments/assets/8185d7e6-e733-4d98-8e73-654c8a940443)

# <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Nerd%20Face.png" alt="Nerd Face" width="50" height="50" /> Gerenciador de Tarefas

Este é um projeto simples de Gerenciador de Tarefas construído com `React` usando `Vite`, visa completar um desafio proposto pela faculdade onde o propósito é desenvolvolver uma aplicação React chamada "Gerenciador de Tarefas". O usuário deve ser capaz de adicionar tarefas, marcar tarefas como concluídas e filtrar tarefas por seu status... As tarefas são salvas no `localStorage`, garantindo que não se percam ao atualizar a página. <br/>
<br/>
Os Requisitos são: <br/>
- Adicionando Tarefas: Deve haver um campo de entrada (input) onde os usuários podem digitar o nome da tarefa e um botão para adicionar essa tarefa à lista.
- Lista de Tarefas: As tarefas adicionadas devem ser listadas na tela, e ao lado de cada tarefa, deve haver uma caixa de seleção (checkbox) que o usuário pode marcar quando a tarefa for concluída.
- Filtragem: Adicione botões ou links para permitir que os usuários filtrem as tarefas por seu status: Todas, Concluídas e Pendentes.
- Estado Global: Use o contexto do React (useContext e useReducer ou useState) para gerenciar o estado global da aplicação.


# <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Backhand%20Index%20Pointing%20Down%20Light%20Skin%20Tone.png" alt="Backhand Index Pointing Down Light Skin Tone" width="50" height="50" /> Funcionalidades
- Adicionar novas tarefas.
- Marcar tarefas como concluídas.
- Filtrar tarefas (Todas, Concluídas, Pendentes).
- Excluir tarefas concluídas.
- As tarefas são salvas no `localStorage`, garantindo persistência ao recarregar a página.

# <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Hammer.png" alt="Hammer" width="50" height="50" /> Funcionalidades do ToDoContext
- ADD_TASK: Adiciona uma nova tarefa ao estado global.
- TOGGLE_TASK: Alterna o status de uma tarefa (completada/não completada).
- DELETE_TASK: Remove a tarefa do estado.
- LOAD_TASKS: Carrega as tarefas salvas do localStorage.

# <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Technologist%20Light%20Skin%20Tone.png" alt="Man Technologist Light Skin Tone" width="50" height="50" /> Tecnologias Utilizadas
- React - Biblioteca JavaScript para construção de interfaces.
- Vite - Ferramenta de build para desenvolvimento frontend rápido.
- CSS Modules - Para escopo e modularização dos estilos.

# <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/File%20Folder.png" alt="File Folder" width="50" height="50" /> Estrutura do Projeto
A estrutura de pastas do projeto segue o padrão básico de uma aplicação web estática feita com React Vite:

```
├── src
|   ├── assets
|   |   ├── favicon.ico
│   ├── components
│   │   ├── AddTask
│   │   │   └── AddTask.jsx
│   │   │   └── AddTask.module.css
│   │   ├── Input
│   │   │   └── Input.jsx
│   │   │   └── Input.module.css
│   │   ├── ToDoList
│   │   │   └── ToDoList.jsx
│   │   │   └── ToDoList.module.css
│   ├── contexts
│   │   └── ToDoContext.jsx
│   ├── App.jsx
│   ├── index.jsx
│   └── global.css
├── index.html
└── package.json
```

# <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/X-Ray.png" alt="X-Ray" width="50" height="50" /> Estilização
Os estilos são aplicados utilizando CSS Modules, o que garante um escopo local para cada componente.<br/> Isso significa que as classes CSS não colidem entre si, proporcionando uma melhor organização e manutenção do código.

## 🧑‍🚀 Autor

<p align="center">
  <a href="https://github.com/Caiobaldudev">
    <img src="https://github.com/Caiobaldudev.png" alt="Caio Balduino" width="80">
  </a>
</p>

<p align="center">
  Este projeto foi desenvolvido por <strong>Caio Balduino</strong>
</p>


