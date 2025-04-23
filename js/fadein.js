// Função para ativar o fade-in sempre que o card entrar na tela
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card'); // Seleciona todos os cards
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-card-visible');
        } else {
          entry.target.classList.remove('fade-in-card-visible');
        }
      });
    }, {
      threshold: 0.5 // Ativa quando 50% do card estiver visível
    });
  
    cards.forEach(card => {
      observer.observe(card); // Observa cada card
    });
  });
  