# To Do App

Este é um aplicativo simples de gerenciamento de tarefas desenvolvido em HTML, CSS e JavaScript. O objetivo principal do projeto é permitir que os usuários possam adicionar, editar e excluir tarefas, com dados persistidos localmente usando o `localStorage`. A interface foi criada com o framework Bootstrap para facilitar o design responsivo e melhorar a experiência do usuário.

## Funcionalidades

- **Adicionar tarefas:** O usuário pode adicionar novas tarefas com uma descrição, data e tipo.
- **Editar tarefas:** O usuário pode editar a descrição de uma tarefa existente.
- **Excluir tarefas:** O usuário pode excluir uma tarefa.
- **Persistência de dados:** As tarefas são armazenadas localmente no navegador utilizando `localStorage`, permitindo que as tarefas sejam mantidas mesmo após o fechamento e reabertura do navegador.
- **Feedback visual:** O sistema exibe alertas ao adicionar ou editar tarefas, proporcionando um retorno rápido sobre as ações realizadas.

## Tecnologias Utilizadas

- **HTML:** Estruturação do conteúdo da página.
- **CSS:** Estilização da interface (com uso de Bootstrap).
- **JavaScript:** Lógica do front-end para manipulação das tarefas, armazenamento local e interação com o usuário.
- **Bootstrap:** Framework CSS para criar uma interface responsiva e de fácil uso.

## Como Executar

1. **Clonar o repositório:**

   Abra o terminal no local onde deseja armazenar o projeto e execute o comando:

   ```bash
   git clone <URL do repositório>
   ```

2. **Abrir o projeto:**

   Navegue até o diretório do projeto:

   ```bash
   cd task-list-app
   ```

3. **Abrir o arquivo HTML:**

   Abra o arquivo `index.html` em seu navegador:

   ```bash
   open index.html  # no macOS
   start index.html  # no Windows
   xdg-open index.html  # no Linux
   ```

4. **Interagir com a aplicação:**

   - Para adicionar uma nova tarefa, complete os campos do formulário e clique em "Add Task".
   - Para editar uma tarefa, clique no botão "Edit" ao lado da tarefa.
   - Para excluir uma tarefa, clique no botão "Delete".

## Estrutura de Arquivos

```plaintext
task-list-app/
│
├── index.html        # Página principal com a interface do usuário
├── app.js            # Arquivo JavaScript que contém a lógica do app
└── README.md         # Documentação do projeto
```

## Funcionalidade de Tarefas

1. **Adicionar tarefas:**
   - As tarefas são inseridas com uma descrição, data (ano, mês e dia) e tipo (ex: estudo, trabalho, saúde, etc).
   - Após adicionar uma tarefa, ela é salva no `localStorage` e a lista de tarefas é atualizada automaticamente.

2. **Editar tarefas:**
   - Ao clicar no botão "Edit", o usuário pode editar a descrição da tarefa.
   - A edição ocorre por meio de um prompt simples, que captura uma nova descrição.
   - Após editar, as alterações são salvas e a lista de tarefas é atualizada.

3. **Excluir tarefas:**
   - Ao clicar no botão "Delete", a tarefa é removida permanentemente da lista e do `localStorage`.

4. **Persistência:**
   - O estado das tarefas é mantido entre recarregamentos da página usando o `localStorage`. Assim, mesmo que o usuário feche e reabra o navegador, as tarefas persistem.

## Como Contribuir

1. Faça um fork deste repositório.
2. Crie uma branch para sua feature (`git checkout -b minha-feature`).
3. Faça o commit das suas alterações (`git commit -am 'Adiciona nova feature'`).
4. Faça o push para a branch (`git push origin minha-feature`).
5. Abra um Pull Request explicando suas mudanças.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
