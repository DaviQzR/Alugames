function alterarStatus(id) {
  let gameClicado = document.getElementById(`game-${id}`);
  let imagem = gameClicado.querySelector(`.dashboard__item__img`);
  let botao = gameClicado.querySelector(`.dashboard__item__button`);

  // Verifica se o jogo está alugado
  let estaAlugado = imagem.classList.contains('dashboard__item__img--rented');

  // Altera o status de alugado para disponível e vice-versa
  if (estaAlugado) {
      // Se estiver alugado, muda para disponível
      imagem.classList.remove('dashboard__item__img--rented');
      botao.textContent = 'Alugar';
      botao.classList.remove('dashboard__item__button--return');
  
    } else {
      // Se estiver disponível, muda para alugado
      imagem.classList.add('dashboard__item__img--rented');
      botao.textContent = 'Devolver';
      botao.classList.add('dashboard__item__button--return');
  }
}
