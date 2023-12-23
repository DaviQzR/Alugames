function alterarStatus(id) {
  let gameClicado = document.getElementById(`game-${id}`);
  let imagem = gameClicado.querySelector(`.dashboard__item__img`);
  let botao = gameClicado.querySelector(`.dashboard__item__button`);

  // Verifica se o jogo está alugado
  let estaAlugado = imagem.classList.contains('dashboard__item__img--rented');

  // Adiciona uma confirmação antes de alterar o status
  if (estaAlugado) {
      // Se estiver alugado, exibe uma mensagem de confirmação
      if (confirm("Tem certeza que deseja devolver este jogo?")) {
          // Se o usuário confirmar, muda para disponível
          imagem.classList.remove('dashboard__item__img--rented');
          botao.textContent = 'Alugar';
          botao.classList.remove('dashboard__item__button--return');
      }
  } else {
      // Se estiver disponível, muda para alugado
      imagem.classList.add('dashboard__item__img--rented');
      botao.textContent = 'Devolver';
      botao.classList.add('dashboard__item__button--return');
  }
}
