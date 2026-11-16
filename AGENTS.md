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

### 📝 Registro #020 — Ideias e uso de fotos
* **Data:** 13/11/2026
* **Pediu:** "Preciso de ideias onde posso adicionar fotos minhas, fotos de perfumes, foto da minha coleção." / "Como eu adiciono imagem?" / "Preciso de mais fotos para dentro do meu site."
* **Usou:** a pasta `public/img/`, a tag `<img>` com `alt` e CSS para foto redonda, sobreposta e em galeria.
* **Mudou:** a foto pequena e a foto grande do Malbec na trajetória, em tamanho fixo. A seção "coleção" saiu da trajetória.

### 📝 Registro #021 — Modelagem do banco (relacionamentos)
* **Data:** 14/11/2026
* **Pediu:** "No mínimo 3 tabelas, com relacionamentos, n:n se der, senão 1:1 e 1:n." / "No máximo 5 tabelas." / "Tire SMALLINT, DELETE CASCADE."
* **Usou:** 5 tabelas (usuario, perfil, marca, perfume, colecao) com 1:1, 1:N e N:N.
* **Mudou:** a primeira versão tinha 8 tabelas e foi reduzida; os tipos viraram INT e foi retirado o CASCADE (agora apaga-se coleção e perfil antes do usuário).

### 📝 Registro #022 — Erros de conexão com o banco
* **Data:** 14/11/2026
* **Pediu:** prints do erro 500 no cadastro e do terminal.
* **Usou:** a leitura do terminal (`Access denied for user 'root'@'localhost'`).
* **Mudou:** [escreva o que você fez, por exemplo: criou um usuário do projeto e ajustou o `.env.dev`]. A senha do banco não deve ser guardada em chat nem enviada ao GitHub.

### 📝 Registro #023 — Tabelas funcionando no site
* **Data:** 14/11/2026
* **Pediu:** "Dê o passo a passo para as tabelas funcionarem, todos os códigos." / "Onde eu adiciono cada arquivo novo?" / "Por que cada pasta, qual o objetivo?"
* **Usou:** routes, controllers e models de coleção e perfil, `familias.js`, `colecao.html` e `perfil.html`, além da explicação do padrão MVC.
* **Mudou:** [escreva o que foi aplicado e o que ainda falta].

### 📝 Registro #024 — Login e telas de login/cadastro
* **Data:** 14/11/2026
* **Pediu:** "O que está liberado apenas para quem realizou o login?" / "Cadastro na metade da esquerda, login na direita, com foto da coleção."
* **Usou:** o `sessionStorage` para o login (proteção só no navegador) e `order` e `background-image` no CSS.
* **Mudou:** o cadastro ganhou a classe `pagina-cadastro`; a foto da coleção entrou na capa das duas telas.
com essa base

### 📝 Registro #025 — Fotos no site (como adicionar e sobrepor)
* **Data:** 14/11/2026
* **Pediu:**
  > *"Preciso de ideias onde posso adicionar fotos minhas, fotos de perfumes, foto da minha coleção."*
  > *"Como eu adiciono imagem?"*
  > *"Tenho que criar a pasta img.html?"*
  > *"Na mesma pasta eu posso tacar duas fotos? Uma sobreposta à outra."*
* **Usou:** a pasta `public/img/`, a tag `<img>` com `alt` e o CSS de foto sobreposta (`position: relative` na caixa e `position: absolute` na foto pequena). No `trajetoria.html`, as duas fotos substituíram o frasco do Malbec desenhado em CSS.
* **Mudou:** o `img` tinha sido criado como arquivo, e precisava ser uma pasta. As fotos precisam ser arrastadas para a pasta na barra lateral do VS Code, e não para dentro do editor. Também ajustei os nomes no HTML para bater com os dos arquivos (`malbec.jpg` e `colecao.jpg`).

### 📝 Registro #026 — Ajuste das fotos da trajetória
* **Data:** 14/11/2026
* **Pediu:**
  > *"Quando eu tiro o zoom ou dou zoom a foto não acompanha, como eu ajusto isso?"* / *"Ajuste."*
  > *"Eu não quero que a foto acompanhe a tela, o que faço? Quero que ela fique paradinha lá."*
  > *"Tire o card da coleção, não irei usar agora."*
* **Usou:** o bloco `.fotos-memoria`, `.foto-principal` e `.foto-sobreposta` no `trajetoria.css`, primeiro em porcentagem e depois com tamanho fixo em pixels (`aspect-ratio` e `object-fit: cover`). Também apaguei a seção "A coleção hoje" e o `<script>` que desenhava os números dela.
* **Mudou:** o CSS que eu tinha ainda não tinha o bloco das fotos, então ele foi reconstruído. A foto passou a ter tamanho fixo (260 × 346 px e 140 × 140 px) em vez de acompanhar a tela.

### 📝 Registro #027 — Modelagem do banco (relacionamentos)
* **Data:** 14/11/2026
* **Pediu:**
  > *"Preciso que você me dê no mínimo 3 tabelas no MySQL, com relacionamentos e, se der, faça um N:N, senão um 1:1 e 1:N."*
  > *"Me dê no máximo 5 tabelas."*
  > *"Tire SMALLINT, DELETE CASCADE."*
* **Usou:** o `script-perfumaria-5-tabelas.sql`, com `usuario`, `perfil` (1:1), `marca` (1:N com `perfume`), `perfume` e `colecao` (N:N entre usuário e perfume).
* **Mudou:** a primeira versão tinha 8 tabelas e foi reduzida para 5. Os tipos `SMALLINT` e `TINYINT` viraram `INT`, e o `ON DELETE CASCADE` saiu. Agora, para apagar um usuário, apaga-se antes a coleção e o perfil dele.

### 📝 Registro #028 — Erro de conexão com o banco
* **Data:** 15/11/2026
* **Pediu:**
  > *"Eu não mexi nas rotas mais nada desde a última vez, já era para estar funcionando e mandando para o banco?"*
  Enviei os prints do erro 500 no cadastro e do terminal. Também perguntei sobre a conexão "individual" do Workbench, que sumiu ao reabrir, e pedi para a IA guardar a senha do banco (ela recusou, porque a senha fica no `.env.dev`).
* **Usou:** a leitura do terminal (`Access denied for user 'root'@'localhost'`), a conferência do `.env.dev` e a criação de um usuário próprio do projeto no MySQL.
* **Mudou:** [escreva o que resolveu, por exemplo: a senha ou o usuário do `.env.dev`]. Troque qualquer senha que tenha sido escrita em conversa, e não coloque senhas neste diário.

### 📝 Registro #029 — Tabelas funcionando no site
* **Data:** 15/11/2026
* **Pediu:**
  > *"O que eu preciso fazer para essas novas tabelas funcionarem? Que aba eu preciso criar, etc."*
  > *"Dê o passo a passo para as tabelas funcionarem, me dê todos os códigos e o passo a passo."*
  > *"Onde eu adiciono cada arquivo novo?"*
  > *"Agora me explique o porquê de cada pasta, o porquê você criou elas, qual o objetivo."*
* **Usou:** 3 models, 2 controllers, 2 rotas, o `familias.js`, as páginas `colecao.html` e `perfil.html` e 4 linhas no `app.js`. Também usei a explicação do padrão MVC (rotas, controllers, models e a pasta `public`).
* **Mudou:** [escreva o que foi aplicado e o que ainda falta].

### 📝 Registro #030 — O que exige login
* **Data:** 15/11/2026
* **Pediu:**
  > *"Hoje, o que está liberado apenas para quem realizou o login?"*
* **Usou:** a explicação: o login guarda `NOME_USUARIO`, `EMAIL_USUARIO` e `ID_USUARIO` no `sessionStorage`. Dashboard, coleção e perfil dependem dele, mas essa proteção é só no navegador, e as rotas da API não verificam quem pede.
* **Mudou:** nada no código.

### 📝 Registro #031 — Login e cadastro em metades opostas
* **Data:** 15/11/2026
* **Pediu:**
  > *"Quero alterar para que, em vez do login e cadastro serem aparentemente do mesmo lado, o cadastro fique na metade da esquerda e o login na metade da direita, ainda um em cada aba. E depois, nas telas de login e cadastro, quero adicionar uma foto de uma coleção de perfumes no fundo, na metade."*
* **Usou:** a classe `pagina-cadastro` no `cadastro.html` e, no `LogCadas.css`, a propriedade `order` para trocar os lados e o `background-image` com uma camada escura por cima da foto.
* **Mudou:** o frasco desenhado em CSS foi substituído pela foto da coleção. No celular, a foto volta para cima da tela.

### 📝 Registro #032 — Mais fotos e onde colocá-las
* **Data:** 15/11/2026
* **Pediu:**
  > *"Preciso de mais fotos para dentro do meu site mesmo, me dê ideias, pode ser de perfumes soltos, coleções, etc."*
  > *"Me dê um passo a passo de onde exatamente colocar a foto para ficar bonito e chamativo, onde exatamente colocar no código."*
* **Usou:** [liste os lugares que você aplicou: banner do index, galeria "Minha estante", faixa na trajetória e na coleção]. O código usa `.hero-foto`, `.galeria` e `.foto-faixa`, com `aspect-ratio`, `object-fit: cover` e moldura dourada.
* **Mudou:** usei alguns lugares que ele me passou.

### 📝 Registro #033 — Resumo do projeto e o que é o diário
* **Data:** 15/11/2026
* **Pediu:**
  > *"Me conte um resumão dessa conversa, sobre o que é o meu trabalho, o que foi feito, diário de prompts, ideias, tudo resumão."*
  > *"Não é para você me dar o diário de prompts ainda, é para você falar dele, o que ele é."*
* **Usou:** o resumo geral e a explicação do diário (para que serve, os campos pediu, usou, mudou e domínio do código, e onde ele fica).
* **Mudou:** nada no código.

### 📝 Registro #034 — Dashboard que não atualiza
* **Data:** 15/11/2026
* **Pediu:**
  > *"Essa é a minha nova dash, não sei o porquê, mas não está atualizando. Tipo, eu coloco uma família olfativa nova e ele ainda só fica cítrico."*
  Enviei o código do dashboard novo, com mostradores e a rota `/colecao/familias`.
* **Usou:** o diagnóstico: a página carrega os dados uma única vez; um perfume que já existe reaproveita a família antiga; só conta o que está como "Tenho"; a rota `/colecao/familias` precisa vir antes de `/:idUsuario`; e o teste com a URL da API e um `SELECT` no MySQL.
* **Mudou:** apenas atualizei.

### 📝 Registro #035 — Ideias de KPI para o dashboard
* **Data:** 15/11/2026
* **Pediu:** "quero que me dê ideias para a KPI da data do último cadastro, uma KPI melhor" / "você analisou as outras duas? me dê uma meio diferente" / "tem mais ideias?"
* **Usou:** a análise de que os KPIs de cadastros eram repetidos e as ideias de KPI pessoais, ligadas à coleção (sua coleção vs. média, família favorita, marca mais presente, lista de desejos). [confirme quais você aproveitou]
* **Mudou:** a primeira resposta da IA sugeriu KPIs que repetiam o que o dashboard já mostrava (cadastros e diversidade de famílias), então pedi algo diferente. [escreva o que você decidiu]

### 📝 Registro #036 — Barrinha do menu em branco e dourado
* **Data:** 15/11/2026
* **Pediu:** "como fazer para essa barrinha ser dourada" / "o da esquerda eu quero branco e o da direita, dourado"
* **Usou:** as classes `separador` (branco) e `separadorDourado` (dourado) com a propriedade `color` no `trajetoria.css` e no `origem.css`.
* **Mudou:** a IA errou a causa nas duas primeiras respostas (apontou o `menu.js` e o CSS). Só depois de eu enviar o projeto em ZIP apareceu que a barra é um `<li class="separador">|</li>` escrito no HTML, e que a classe `separadorDourado` não tinha CSS. [escreva o que você aplicou]

### 📝 Registro #037 — Detalhes diferentes para os três cliques do dashboard
* **Data:** 15/11/2026
* **Pediu:** "quando clica na KPI de pessoas cadastradas, na KPI de novos nos últimos 30 dias e no 'cadastros por dia', todos dão as mesmas informações, quero mudar isso" / "de que linha até que linha no passo 4"
* **Usou:** chaves próprias (`total`, `novos`, `cadastros`) no `data-abrir`, a função `criarLinha` (gráfico de linha do Chart.js), os três blocos novos no `detalhes()` e a troca do trecho do gráfico no `abrir()` (linhas 406 a 408).
* **Mudou:** [escreva o que você ajustou ou corrigiu].

### 📝 Registro #038 — Troca de KPIs repetidos
* **Data:** 15/11/2026
* **Pediu:** "me dê ideia de KPI para alterar, para que minha dash não fique muito redundante" / "no CSS não tem essa regra .kpi strong"
* **Usou:** a função `resumoColecao()`, os KPIs "perfumes na sua coleção", "lista de desejos" e "marca mais presente", os detalhes de cada um e a regra de CSS para cortar texto longo.
* **Mudou:** a IA disse que a regra `.kpi strong` estava em um arquivo CSS, mas ela está dentro do `<style>` do próprio `dashboard.html`. Ela também apontou um erro no meu SQL (`statuss` no `INSERT INTO colecao`). [escreva o que você aplicou e se corrigiu o SQL]

### 📝 Registro #039 — CSS do dashboard em arquivo próprio
* **Data:** 15/11/2026
* **Pediu:** "não posso separar o CSS que está dentro do HTML? E o arquivo dashboard.css posso apagar?"
* **Usou:** a conferência de que nenhuma página usava o `dashboard.css` antigo, e o passo de mover o `<style>` para `css/dashboard.css` com um `<link rel="stylesheet">`.
* **Mudou:** [escreva se você apagou o arquivo antigo e testou].

### 📝 Registro #040 — Erro no `git push` (rejected)
* **Data:** 15/11/2026
* **Pediu:** print do erro e a pergunta "será que foi porque eu mudei o README dentro do próprio GitHub?" / print do editor de merge ("apareceu isso").
* **Usou:** `git pull origin main`, salvar a mensagem do merge (`:wq`) e `git push origin main`, sem usar `--force`.
* **Mudou:** [escreva se apareceu conflito e como resolveu].

## 📅 CHECKLIST DE ROTINA & GESTÃO

- [ ] Planejamento semanal distribuído (Matérias + Grupo + Individual).
- [ ] Diário de Prompts (`AGENTS.md`) atualizado a cada nova funcionalidade.
- [ ] Commits frequentes no Git com mensagens descritivas.
- [⏰] **APONTAMENTO SEMANAL DO PROJETO INDIVIDUAL:** Toda Quinta-feira, às 23h58.