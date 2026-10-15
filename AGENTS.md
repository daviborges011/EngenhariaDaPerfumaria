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
* **Domínio do código:** [escreva com suas palavras: o que é `var()`, o que o `grid` faz, como o `@media` adapta para celular].

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

## 📅 CHECKLIST DE ROTINA & GESTÃO

- [ ] Planejamento semanal distribuído (Matérias + Grupo + Individual).
- [ ] Diário de Prompts (`AGENTS.md`) atualizado a cada nova funcionalidade.
- [ ] Commits frequentes no Git com mensagens descritivas.
- [⏰] **APONTAMENTO SEMANAL DO PROJETO INDIVIDUAL:** Toda Quinta-feira, às 23h58.