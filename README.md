# A Engenharia da Perfumaria: Minha História Através das Fragrâncias

Site pessoal e interativo que conta a origem do perfume e a minha trajetória com a perfumaria, com um dashboard alimentado por dados reais do banco de dados.

> **Projeto Individual (PI)** — [ADS - São Paulo Tech School] — 2026
> **Autor:** [Davi Borges Taioque]
> **RA:** [01262115]

---

## Objetivo

Desenvolver um site pessoal, em formato de narrativa, que transmita o meu amor pelo universo dos perfumes às pessoas próximas e as incentive a conhecê-lo. O projeto **não é um produto nem uma loja**: é uma forma de contar a minha história.

**Objetivos específicos**

- Apresentar a história da perfumaria, do Egito Antigo aos dias atuais.
- Contar a minha trajetória: o primeiro perfume (um Malbec Clássico, presente da minha mãe, em 2021) e a coleção atual, com mais de 15 fragrâncias.
- Explicar a importância do perfume para a imagem e a confiança das pessoas.
- Permitir cadastro e login de visitantes, com saudação personalizada.
- Exibir em um dashboard os usuários cadastrados no banco de dados.
- Aplicar valores socioemocionais e registrar o processo de desenvolvimento.

## Sobre a minha história

Ganhei meu primeiro perfume em 2021, das mãos da minha mãe. Desde então, fui pesquisando, comparando custo-benefício, comprando e me apaixonando pelo tema. Hoje tenho mais de 15 perfumes e pretendo continuar colecionando.

## Telas do site

| Tela | Arquivo | Descrição | Status |
|---|---|---|---|
| Login | `login.html` | Entrada de quem já tem cadastro | Layout pronto, falta ligar à API |
| Cadastro | `cadastro.html` | Criação de conta | Layout pronto, falta ligar à API |
| A Origem | [a definir] | História do perfume no mundo | A fazer |
| A Minha Trajetória | [a definir] | Minha história pessoal com os perfumes | A fazer |
| Dashboard | [a definir] | Indicadores com os usuários cadastrados | A fazer |

## Funcionalidades

- Cadastro e login com validação de formulário.
- Narrativa em capítulos: origem do perfume e trajetória pessoal.
- Dashboard com dados do banco: total de usuários, cadastros por período e lista dos últimos cadastrados.
- Design editorial, sem aparência de e-commerce.

## Tecnologias

- **Front-end:** HTML, CSS e JavaScript
- **Back-end:** API em Node.js [confirmar: Express]
- **Banco de dados:** [confirmar: MySQL]
- **Base do projeto:** template web-data-viz
- **Gráficos:** [a definir, ex.: Chart.js]
- **Design e versionamento:** Figma, VS Code, Git e GitHub

## Como o sistema se comunica

1. O navegador envia o formulário de cadastro ou login para a API (requisição HTTP em JSON).
2. A API valida os dados e grava ou consulta o banco de dados.
3. O dashboard pede os dados à API, que os devolve em JSON.
4. O JavaScript do front-end desenha os cards e gráficos na tela.

[Ajustar com as rotas reais do web-data-viz.]

## Estrutura de arquivos

```
perfumaria/
├── login.html
├── cadastro.html
├── style.css
├── logo-brasao.svg        (e demais versões da logo)
├── AGENTS.md              (contexto para IA + diário de prompts)
└── README.md
```

[Atualizar conforme a estrutura do web-data-viz.]

## Como executar

[Preencher com os passos do template: instalar dependências, configurar o banco e iniciar o servidor.]

## Identidade visual

| Uso | Cor |
|---|---|
| Fundo principal | `#0B1325` |
| Cards e seções | `#1E293B` |
| Textos | `#F8FAF8` e `#E2E8F0` |
| Destaques e botões | `#C5A059` e `#D4AF37` |

Fontes: Bodoni Moda (títulos) e Figtree (textos).

## Valores socioemocionais aplicados

Profundidade, conexão, relacionamento, exposição, iniciativa, resiliência, pontualidade e profissionalismo.

## Uso de IA e documentação do processo

O projeto foi desenvolvido com apoio de IA. Todo o uso está registrado no **diário de prompts** (`AGENTS.md`) no formato *pediu, usou e mudou*, e o histórico de commits mostra a evolução do código. Cada trecho foi revisado para que eu consiga explicá-lo.

## Rotina e entregas

- Apontamento do projeto individual: toda quinta-feira, às 23h58.
- Entrega final: [inserir data].

## Próximos passos

- [ ] Dar continuidade a Documentação
- [ ] Ligar login e cadastro à API
- [ ] Criar as telas A Origem e A Minha Trajetória
- [ ] Criar o dashboard com dados do banco
- [ ] Escrever o conteúdo final dos capítulos
- [ ] Revisar o código e preparar a apresentação


## Agradecimentos

À minha mãe, que me deu o meu primeiro perfume e expandiu a minha mente: antes eu nem imaginava que usar perfume fosse necessário.