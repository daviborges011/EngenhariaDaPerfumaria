# 🏛️ AGENTS.md — Contexto do Agente & Diário de Prompts

> **Projeto Individual:** A Engenharia da Perfumaria: Minha História Através das Fragrâncias  
> **Autor:** [Davi Borges]  
> **Data de Início:** October 2026  
> **Lembrete de Apontamento:** Toda quinta-feira, às 23h58.

---

## 🤖 PARTE 1: INSTRUÇÕES PARA OS AGENTES DE IA (AI CONTEXT & RULES)

*Atenção Agente/IA: Antes de gerar código ou documentação para este repositório, leia e siga rigorosamente os princípios e restrições abaixo.*

### 1. Visão Geral do Projeto
Este projeto **NÃO é um e-commerce, startup ou produto comercial**. Trata-se de um **site/memorial pessoal e diário interativo** focado na paixão do autor pelo universo da perfumaria. O objetivo é unir a técnica e matemática (Engenharia) à emoção e memórias afetuosas (História Pessoal).

### 2. Estrutura das Páginas & Seções
* **Tela de Autenticação:** Login e Cadastro para identificar visitantes/amigos de forma personalizada (salvando preferências/nome).
* **Capítulo I — A Origem:** A história geral da perfumaria (alquimia, Egito Antigo e evolução histórica).
* **Capítulo II — A Trajetória:** História pessoal do autor, memórias afetuosas e o manifesto de amor ao tema (convencendo o leitor a apreciar o universo olfativo).
* **Capítulo III — Laboratório & Dashboards:** Indicadores visuais e matemáticos (sem cara de software empresarial):
  * Calculadora de Borrifadas / Rendimento ($1 \text{ mL} \approx 10 \text{ a } 12 \text{ borrifadas}$).
  * Análise de custo por aplicação diária (Custo/Uso).
  * Gráficos de Famílias Olfativas (Teia/Radar/Donut).
  * Matriz de Fixação (Horas) e Projeção sensorial na pele.

### 3. Regras Técnicas & Diretrizes de Código
* **Design & UX:** Estilo editorial, sofisticado e intimista. Proibido botões do tipo "Comprar", "Adicionar ao Carrinho" ou "Assinar".
* **Autenticação & APIs:** Acesso via tokens/credenciais seguras. As chaves de API externas devem exigir autenticação/autorização adequada e nunca ficar expostas no código cliente.
* **Domínio e Clareza:** O código deve ser limpo, modular e devidamente comentado. O autor deve entender 100% da lógica (funções matematicas, consumo de rotas e manipulação de DOM/Gráficos).

---

## 📓 PARTE 2: DIÁRIO DE PROMPTS E EVOLUÇÃO DO DESENVOLVIMENTO

*Este espaço registra todas as interações com a IA, decisões de arquitetura e aprendizados técnicos.*

---

### 📝 Registro #001 — Estruturação do Conceito e Escopo
* **Data:** 12/10/2026
* **Objetivo:** Definir o título oficial, a narrativa e a arquitetura visual do projeto sem cara de produto comercial.
* **Prompt Enviado:**
  > *"A gente estava falando sobre o meu projeto individual de perfumes. Ele vai contar sobre como nasceu o perfume e minha história. Tera dashboards com borrifadas/mL, custo, login/cadastro. Me dê uma visão ampla e fácil de entender."*
* **O que mudou / Ajustes Realizados:**
  * Removida a ideia inicial de Quiz.
  * Mantido foco em 3 Capítulos e Dashboards de Engenharia Olfativa.
  * Definido o título oficial: *"A Engenharia da Perfumaria: Minha História Através das Fragrâncias"*.
* **Domínio do Código & Aprendizado:**
  * Compreensão sobre a separação de escopo entre produto comercial x experiência narrativa.

### 📝 Registro #002 — Telas de login e cadastro (HTML/CSS)
* **Data:** 14/10/2026
* **Pediu:** HTML e CSS da tela de login e cadastro do site pessoal "A Engenharia da Perfumaria", com a paleta azul noite (#0B1325, #1E293B) e dourado (#C5A059), sem cara de produto comercial.
* **Usou:** o layout em duas colunas (capa com o título à esquerda e formulário à direita), o frasco de perfume feito só com CSS, os formulários com validação do próprio HTML e as variáveis de cor no `:root`.
* **Mudou:** separei login e cadastro em `login.html` e `cadastro.html`, ligados por links. Troquei a paleta original pela minha, corrigi as variáveis antigas que sobraram no CSS e ajustei o contraste entre o fundo, a capa e o cartão do formulário.

### 📝 Registro #003 — Logo
* **Data:** 14/10/2026
* **Pediu:** uma logo dourada e azul para o site.
* **Usou:** [qual das três propostas você escolheu: brasão, selo ou horizontal].
* **Mudou:** não gostei da primeira versão, então pedi um frasco mais elaborado e outras ideias. A IA gerou três propostas em SVG.

### 📝 Registro #004 — Documentação do projeto
* **Data:** 14/10/2026
* **Pediu:** uma documentação no estilo do modelo do professor, com a história do perfume, a minha história (primeiro perfume, o Malbec Clássico, em 2021, dado pela minha mãe), a coleção de mais de 15 perfumes e a importância do perfume para a imagem pessoal.
* **Usou:** a estrutura de seções (Contexto, Objetivo, Justificativa, Escopo, Materiais e Métodos, Próximos Passos, Agradecimentos e Referências) e os textos da história e da imagem pessoal.
* **Mudou:** acrescentei as respostas das cinco perguntas do desafio (interesse, valores, dificuldades, superações e gratidão) em uma nova seção. Os trechos marcados com [confirmar] precisam ser conferidos ou removidos.

### 📝 Registro #005 — Telas A Origem e Minha Trajetória (a partir do ZIP)
* **Data:** 16/10/2026
* **Pediu:**
  > *"Analise o site presente neste arquivo ZIP e recrie-o em HTML e JavaScript juntos, porém um código para a tela de origem, e o outro para a tela da minha trajetória, e me dê o CSS separado de ambos mantendo o mesmo design, conteúdo, responsividade e navegação entre as telas. Me dê com base nos comandos que você já me enviou, sem colocar nada novo."*
* **Usou:** os textos e o CSS do site do ZIP, divididos em `origem.html`, `trajetoria.html` e um CSS para cada tela. O JavaScript desenha a linha do tempo a partir de uma lista de marcos.
* **Mudou:** o ZIP era um app React já compilado, então a IA leu o código e recriou em HTML e JavaScript puros. Os botões "Baixar site pronto" e "Códigos" do original foram removidos.

### 📝 Registro #006 — Botões Login e Cadastro no cabeçalho
* **Data:** 16/10/2026
* **Pediu:**
  > *"Me dê dois botões no canto superior direito, mostrando login e cadastro, para posteriormente eu integrar essas telas às telas de cadastro e login."*
* **Usou:** dois links no cabeçalho, apontando para `login.html` e `cadastro.html`.
* **Mudou:** com os botões novos, o cabeçalho passou a ter duas linhas no celular (marca e botões em cima, menu embaixo).

### 📝 Registro #007 — Telas refeitas com o CSS e o HTML permitidos
* **Data:** 17/10/2026
* **Pediu:**
  > *"Vou te mandar os códigos que eu posso utilizar para você se basear, pois tem alguns que eu não posso, ok? Irei mandar o de CSS e o de HTML."*
* **Usou:** a estrutura e os nomes de classe do modelo (`.header`, `.logo`, `.menu`, `.botoes-header`, `.btn-login`, `.btn-cadastro` e o rodapé), com `flex` e `grid`. Mantive as cores azul e dourado e as fontes do login.
* **Mudou:** as telas foram refeitas e ficaram mais simples que a versão do ZIP (sem palavra vertical nem linhas decorativas). Usei `@media` para o celular, que não estava no modelo, e preciso confirmar se pode.

### 📝 Registro #008 — Ideias para o index
* **Data:** 17/10/2026
* **Pediu:**
  > *"Estou com um código da API chamado index, me dê algumas ideias para colocar no index do meu site."*
* **Usou:** as ideias sugeridas: abertura com botões, três pilares (memória, identidade, conexão), pirâmide olfativa, prévia da minha história, cards dos capítulos, números, saudação personalizada, total de cadastrados e convite final.
* **Mudou:** nada no código ainda, só o planejamento do conteúdo.

### 📝 Registro #009 — Código do index
* **Data:** 17/10/2026
* **Pediu:**
  > *"Então faça o código do index baseado nisso, e o código baseado nos outros."*
  Depois enviei o `index.html` da API (AquaTech) para servir de base.
* **Usou:** a estrutura do index da API (`sessao.js`, `header` com `navbar`, `banner`, `footer`) com o conteúdo das ideias do #008.
* **Mudou:** a primeira versão seguia o modelo do CSS e foi refeita na estrutura do index da API. "Missão, Visão e Valores" viraram "Memória, Identidade e Conexão". A rota do total de cadastros e o nome da chave do `sessionStorage` ficaram para confirmar.

### 📝 Registro #010 — README do projeto
* **Data:** 21/10/2026
* **Pediu:**
  > *"Preciso de um README agora, colocando o objetivo e mais coisas."*
  > *"Preciso melhorar meu GitHub, com fotos, banners, e preciso melhorar tudo mais, me dê um código para eu colocar no meu README."*
* **Usou:** o banner, os badges, a tabela de telas, o diagrama do fluxo e a paleta em imagem.
* **Mudou:** a primeira versão era só texto, e a segunda ganhou banner, badges e prints (ainda são placeholders para eu substituir pelos prints reais).

### 📝 Registro #011 — Próximo passo do projeto
* **Data:** 22/10/2026
* **Pediu:**
  > *"Qual é o próximo passo do meu projeto? Já fiz as telas."*
* **Usou:** a ordem sugerida: colocar as telas no web-data-viz, preparar o banco, ligar cadastro e login à API, preencher a rota do total de cadastros, criar o dashboard, fechar a documentação e ensaiar a apresentação.
* **Mudou:** nada no código, só o planejamento.

### 📝 Registro #012 — Ligação do login, cadastro e dashboard com a API e o banco
* **Data:** 22/10/2026
* **Pediu:**
  > *"Preciso ligar minha tela de login e cadastro ao meu banco de dados, como eu faço usando o usuário controller, etc. Você tem acesso a ele, né?"*
  Enviei o projeto web-data-viz compactado (sem `.env`) e colei o `usuarioController` e o `usuarioModel` do template.
* **Usou:** as rotas, o controller e o model de usuários; o script SQL do banco `perfumaria`; o `fetch` do `cadastro.html` e do `login.html` para `/usuarios/cadastrar` e `/usuarios/autenticar`; o `sessionStorage` para guardar o nome de quem entrou; a rota `/usuarios/total` no index; e o `dashboard.html` com Chart.js e as rotas `/usuarios/recentes` e `/usuarios/por-dia`.
* **Mudou:** o template montava o SQL juntando texto, guardava a senha pura, devolvia a senha ao navegador e exigia empresa e aquário (exemplo AquaTech). Troquei por consultas com `?`, senha guardada como hash (biblioteca `crypto` do Node) e login que devolve só id, nome e e-mail. Também protegi `.env` e `.env.dev` no `.gitignore`.

### 📝 Registro #013 — Passo a passo para aplicar manualmente
* **Data:** 22/10/2026
* **Pediu:**
  > *"Me dê todos os códigos que eu preciso alterar e o passo a passo, para eu fazer manualmente."*
* **Usou:** um guia de 14 passos (gitignore, banco, `config.js`, model, controller, rotas, telas, CSS, index, dashboard, logo e teste).
* **Mudou:** nada novo no código, só a forma de entrega: em vez do ZIP, passo a passo para eu aplicar e entender cada arquivo.

### 📝 Registro #014 — Dúvidas sobre o código
* **Data:** 23/10/2026
* **Pediu:**
  > *"Por que os valores na function que eu adicionei estão meio apagados?"*
  > *"Como realizo o passo 13?"*
  > *"Para o cliente acessar a dashboard, ele tem que estar logado?"*
* **Usou:** as explicações: o VS Code apaga o que está declarado e não usado (no `config.js`, o `valores` precisa estar também dentro de `conexao.query`); o passo 13 é copiar o `logo-selo.svg` para `public/`; e o dashboard só abre com login, mas essa proteção é feita só no navegador (`sessionStorage`), e as rotas da API são públicas.
* **Mudou:** nada no código.

### 📝 Registro #015 — Ideias para ampliar o site
* **Data:** 25/10/2026
* **Pediu:**
  > *"Estou sem ideias novas para o projeto, me dê ideias para eu fazer no meu site."*
  > *"Quero ideias também que falem mais sobre a minha história e que mostrem alguma foto minha pequeno."*
  > *"Agora me dê ideias mais abrangentes."*
* **Usou:** [liste as ideias que você escolheu, por exemplo: Sobre o projeto, Glossário, Calculadora, Coleção, Mural].
* **Mudou:** nada no código, só o planejamento.

### 📝 Registro #016 — Roteiro das novas páginas
* **Data:** 27/10/2026
* **Pediu:**
  > *"Me dê um passo a passo bem explícito para eu realizar todas essas."*
* **Usou:** um roteiro em 10 etapas (sobre, glossário, calculadora, página 404, coleção, administrador, coleção em números, perfil olfativo, mural e publicação). As etapas 1 a 4 já estão detalhadas; as 5 a 10 ficam para depois.
* **Mudou:** nada no código ainda.

### 📝 Registro #017 — Correção das páginas novas
* **Data:** 29/10/2026
* **Pediu:**
  > *"Esse sobre não é a origem? E o CSS não está aplicado."*
  > *"Não estou conseguindo acessar a correção, me mande de outro jeito."*
  Enviei o projeto compactado.
* **Usou:** os arquivos corrigidos: `sobre.html`, `glossario.html`, `calculadora.html`, `404.html`, `js/menu.js`, `app.js` (com a página 404), `usuarioController.js` e `usuarioModel.js`.
* **Mudou:** o `sobre.html` estava só com o miolo da página, sem o `<head>` com os links dos CSS, e por isso ficava sem estilo (também havia um erro de digitação, "letruir"). O back-end estava na versão só de login e cadastro, mas as rotas já chamavam o total e o dashboard, então esses davam erro. Também faltavam as páginas novas e o `menu.js`.

### 📝 Registro #018 — Navegação entre as páginas
* **Data:** 02/11/2026
* **Pediu:**
  > *"As páginas com o index e outras, por exemplo, não têm os botões para navegar."*
* **Usou:** três cartões novos no index (Glossário, Calculadora e Sobre o projeto) e links no rodapé de todas as páginas.
* **Mudou:** o `index.html` e o `dashboard.html` passaram a carregar o `extras.css`. Os menus do topo ficaram como estavam, porque mais itens apertariam o cabeçalho no celular. Tirei o link "Coleção" das páginas novas, porque essa página ainda não existe.

### 📝 Registro #019 — Erro 404 no dashboard
* **Data:** 11/11/2026
* **Pediu:**
  > *"Dash deu erro 404."*
* **Usou:** o diagnóstico das três causas possíveis: arquivo fora de `public/` (ou dentro da pasta antiga `public/dashboard/`), servidor com a versão antiga das rotas, ou arquivo de CSS no caminho errado.
* **Mudou:** [escreva o que resolveu o seu caso].

## 📅 CHECKLIST DE ROTINA & GESTÃO

- [ ] Planejamento semanal distribuído (Matérias + Grupo + Individual).
- [ ] Diário de Prompts (`AGENTS.md`) atualizado a cada nova funcionalidade.
- [ ] Commits frequentes no Git com mensagens descritivas.
- [⏰] **APONTAMENTO SEMANAL DO PROJETO INDIVIDUAL:** Toda Quinta-feira, às 23h58.