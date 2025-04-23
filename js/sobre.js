document.addEventListener('DOMContentLoaded', function() {
    const sobreTexto = document.querySelectorAll('.sobre-texto h2, .sobre-texto p, .sobre-texto ul'); // Seleciona os elementos
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Adiciona a classe 'fade-in-text' para animar o elemento
          entry.target.classList.add('fade-in-text');
        } else {
          // Remova a classe 'fade-in-text' se o elemento sair da tela
          entry.target.classList.remove('fade-in-text');
        }
      });
    }, {
      threshold: 0.3 // A animação será acionada quando 30% do elemento estiver visível
    });
  
    sobreTexto.forEach(element => {
      observer.observe(element); // Inicia a observação para cada elemento
    });
  });
  