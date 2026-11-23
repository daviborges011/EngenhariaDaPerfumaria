// transicao.js - faz a página sumir suavemente antes de abrir a próxima.
// Fica dentro de uma função para não misturar os nomes com os dos outros scripts.
(function () {
  let TEMPO = 300; // em milissegundos; igual ao transition de body.saindo no CSS

  // Troca de página com o efeito (usado também nos redirecionamentos feitos em JS)
  function irPara(url) {
    document.body.classList.add('saindo');
    setTimeout(() => { window.location.href = url; }, TEMPO);
  }
  window.irPara = irPara;

  // Intercepta o clique em qualquer link do site
  document.addEventListener('click', (evento) => {
    let link = evento.target.closest('a');

    if (!link || evento.defaultPrevented) return;                       // não é link, ou outro script já tratou (ex.: botão Sair)
    if (evento.button !== 0 || evento.ctrlKey || evento.metaKey || evento.shiftKey || evento.altKey) return; // abrir em nova aba
    if (link.target === '_blank' || link.hasAttribute('download')) return;

    let destino = new URL(link.href, window.location.href);
    if (destino.origin !== window.location.origin) return;              // link para outro site
    if (destino.pathname === window.location.pathname && destino.search === window.location.search) return; // âncora (#) na mesma página

    evento.preventDefault();
    irPara(destino.href);
  });

  // Ao voltar pelo botão "voltar" do navegador, a página pode vir do cache ainda apagada
  window.addEventListener('pageshow', (evento) => {
    if (evento.persisted) document.body.classList.remove('saindo');
  });
})();