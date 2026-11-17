// Esconde tudo o que é só para quem NÃO fez login (convites para cadastro, botões de login e cadastro).
// Basta colocar a classe "so-visitante" no elemento que deve sumir quando a pessoa estiver logada.
(function () {
  // O login guarda o nome da pessoa no sessionStorage. Sem esse valor, a pessoa é visitante.
  if (!sessionStorage.getItem('NOME_USUARIO')) {
    return;
  }

  document.querySelectorAll('.so-visitante').forEach((elemento) => {
    elemento.style.display = 'none';
  });
})();