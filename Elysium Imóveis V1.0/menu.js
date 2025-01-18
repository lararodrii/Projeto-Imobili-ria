

// Efeito de scroll
window.addEventListener("scroll", function () {
  let header = document.querySelector('#header')
  header.classList.toggle('rolagem', window.scrollY > 800)
});

// Efeitos modal 
// Função para abrir o modal
// Script para abrir e fechar os modais
const modals = document.querySelectorAll('.modal');
const btns = document.querySelectorAll('.btn-ver-mais');
const closeBtns = document.querySelectorAll('.close-btn');

btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        modals[index].style.display = 'flex';
    });
});

closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
        closeBtn.closest('.modal').style.display = 'none';
    });
});

// Fechar o modal se o clique for fora do conteúdo
modals.forEach((modal) => {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});



