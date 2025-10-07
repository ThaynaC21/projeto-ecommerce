// Abrir modal ao clicar no ícone do carrinho
document.querySelector('.botao-carrinho').addEventListener('click', function() {
    const modal = document.getElementById('modal-1');
    // Remove aria-hidden antes de focar qualquer elemento
    modal.setAttribute('aria-hidden', 'false');
    modal.classList.add('is-open');
    // Foca o botão de fechar para acessibilidade
    const btnFechar = modal.querySelector('.fechar');
    if (btnFechar) btnFechar.focus();
});

// Fechar modal ao clicar no botão de fechar
document.querySelector('#modal-1 .fechar').addEventListener('click', function() {
    const modal = document.getElementById('modal-1');
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    // Remove foco do botão de fechar ao fechar a modal
    this.blur();
});