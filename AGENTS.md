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

---

### 📝 Registro #002 — Telas de Login e Cadastro (HTML/CSS)
* **Data:** 14/10/2026
* **Objetivo:** Criar as telas de login e cadastro do site, em páginas separadas, com a paleta azul noite e dourado e sem aparência de produto comercial.
* **Prompt Enviado:**
  > *"Monte o HTML e o CSS da tela de login e cadastro do meu site pessoal 'A Engenharia da Perfumaria'. Quero as duas telas em arquivos separados (login.html e cadastro.html), usando o mesmo style.css. Use a paleta: fundo azul escuro (#0B1325), cards em #1E293B, textos off-white e detalhes em dourado envelhecido (#C5A059). Corrija o CSS para que os lados da tela se diferenciem."*
* **O que mudou / Ajustes Realizados:**
  * A IA fez primeiro as duas telas no mesmo arquivo (abas com CSS). Pedi a separação em `login.html` e `cadastro.html`, ligadas por links.
  * Troquei a paleta original pela minha. Isso deixou variáveis antigas no CSS (`--ameixa`, `--papel`), que corrigi para as novas.
  * Ajustei o contraste, porque o fundo e os cartões estavam parecidos: borda dourada, sombra e campos mais escuros que o cartão.
* **Domínio do Código & Aprendizado:**
  * Entendi como funcionam as variáveis CSS (`:root` e `var()`) e por que, ao mudar o nome delas, preciso atualizar todos os lugares que as usam.
  * Entendi o layout em duas colunas com `display: grid` e como o `@media` adapta para celular.
  * O frasco é feito só com `div`s e CSS, e o líquido usa `@keyframes` para animar.
  * Os formulários ainda estão com `action="#"`. A ligação com a API (web-data-viz) será o próximo registro.

---



---

## 📅 CHECKLIST DE ROTINA & GESTÃO

- [ ] Planejamento semanal distribuído (Matérias + Grupo + Individual).
- [ ] Diário de Prompts (`AGENTS.md`) atualizado a cada nova funcionalidade.
- [ ] Commits frequentes no Git com mensagens descritivas.
- [⏰] **APONTAMENTO SEMANAL DO PROJETO INDIVIDUAL:** Toda Quinta-feira, às 23h58.