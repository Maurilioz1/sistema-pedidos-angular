# Sistema de Pedidos Angular

Aplicação de gestão de clientes, produtos e pedidos desenvolvida como projeto acadêmico da disciplina Aplicações Corporativas com Angular, no MBA em Engenharia de Front-End com IA do Infnet.

O projeto tem foco na separação de responsabilidades entre componentes e na organização da aplicação por áreas de negócio. A tela inicial apresenta um cabeçalho e uma visão geral com cartões selecionáveis para os totais fictícios de clientes, produtos e pedidos.

## Etapas concluídas

- Etapa 1 — Configuração e Estrutura Inicial.
- Etapa 2 — Componentes e Interatividade.

## Tecnologias

- Angular e Angular CLI
- TypeScript
- CSS
- Node.js 26 e npm
- Vitest

## Como executar

Na raiz do projeto, instale as dependências:

```bash
npm ci
```

Inicie o servidor de desenvolvimento:

```bash
npm start
```

Abra `http://localhost:4200` no navegador. Para encerrar o servidor, pressione **Ctrl + C**.

## Outros comandos

| Comando | Finalidade |
| --- | --- |
| `npm run build` | Compilar a aplicação e gerar os arquivos de navegador e servidor em `dist`. |
| `npm test -- --watch=false` | Executar a suíte de testes uma vez e encerrar. |

## Organização

| Caminho | Responsabilidade |
| --- | --- |
| `src/main.ts` | Inicializar a aplicação com o componente raiz e sua configuração. |
| `src/app/app.config.ts` | Definir a configuração da aplicação. |
| `src/app/app.ts` e `src/app/app.html` | Compor a tela com o cabeçalho e a visão geral. |
| `src/app/layout/cabecalho/` | Apresentar o nome do sistema no cabeçalho. |
| `src/app/visao-geral/` | Organizar os totais fictícios e controlar a seleção da área. |
| `src/app/visao-geral/cartao-total/` | Exibir o nome e o total de uma área, sinalizar o estado de seleção e emitir o evento de clique. |

## Recursos implementados

### Configuração e componentes iniciais

- Projeto criado com Angular CLI via `npx`.
- Inicialização com `bootstrapApplication` e componentes standalone.
- Cabeçalho e visão geral em componentes com responsabilidades próprias.

### Data binding e diretivas

- Interpolação para exibir o título a partir de um `signal` e os valores da visão geral.
- Bloco `@for` para percorrer a lista de totais.
- Property binding para passar o nome, a quantidade e o estado de seleção a cada cartão.

### Componentes e interatividade

- Reuso do componente `CartaoTotal` para clientes, produtos e pedidos. O cartão recebe seus dados e o estado de seleção via `input()`.
- Evento `selecionado` declarado com `output()` e emitido ao clicar no botão do cartão. A `VisaoGeral` guarda a área selecionada em um `signal`.
- Bloco `@if` para exibir a mensagem com a área selecionada após o primeiro clique.
- Estilização dinâmica com CSS e `aria-pressed`, que também comunica o estado de seleção a tecnologias assistivas.

## Uso de Inteligência Artificial

Usei o ChatGPT (Codex) como apoio para organizar componentes, entender recursos do Angular e analisar falhas nos testes.

## Validação

O build foi concluído com `npm run build`, com geração dos bundles de navegador e servidor e pré-renderização de uma rota. Os cinco testes passaram com `npm test -- --watch=false`.

| Cenário | Resultado |
| --- | --- |
| Carregamento da tela inicial | O cabeçalho e o título **Sistema de Pedidos** foram exibidos. |
| Exibição da visão geral | Os três cartões exibiram os nomes e os totais de clientes, produtos e pedidos. |
| Seleção dos cartões | Ao clicar em outro cartão, o destaque e a mensagem passaram a indicar a nova área selecionada. |

## Limites atuais

Os totais são fictícios e definidos no componente de visão geral. A integração com a DummyJSON para consultar o catálogo de produtos está prevista para a Etapa 4.