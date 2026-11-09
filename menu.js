// Roda em todas as páginas novas. Fica dentro de uma função para não
// misturar os nomes das variáveis com os do script de cada página.
(function () {
  // 1) Saudação: troca Login e Cadastro por "Olá, nome" e Sair
  let nomeLogado = sessionStorage.getItem('NOME_USUARIO');
  let itemLogin = document.getElementById('item-login');
  let itemCadastro = document.getElementById('item-cadastro');

  if (nomeLogado && itemLogin && itemCadastro) {
    let saudacao = document.createElement('li');
    saudacao.className = 'saudacao';
    saudacao.textContent = 'Olá, ';
    let nome = document.createElement('strong');
    nome.textContent = nomeLogado;
    saudacao.appendChild(nome);

    let itemSair = document.createElement('li');
    let linkSair = document.createElement('a');
    linkSair.href = '#';
    linkSair.className = 'btn-login';
    linkSair.textContent = 'Sair';
    linkSair.addEventListener('click', (evento) => {
      evento.preventDefault();
      sessionStorage.clear();
      window.location.reload();
    });
    itemSair.appendChild(linkSair);

    itemLogin.replaceWith(saudacao);
    itemCadastro.replaceWith(itemSair);
  }

  // 2) Link de compartilhar no WhatsApp (no rodapé)
  let compartilhar = document.getElementById('compartilhar');

  if (compartilhar) {
    compartilhar.addEventListener('click', (evento) => {
      evento.preventDefault();
      let texto = 'Conheça o meu projeto: A Engenharia da Perfumaria ' + window.location.origin;
      window.open('https://wa.me/?text=' + encodeURIComponent(texto), '_blank', 'noopener');
    });
  }
})();