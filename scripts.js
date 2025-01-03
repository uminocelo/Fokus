const html = document.querySelector('html');
const btnFoco = document.querySelector('.app__card-button--foco');
const btnCurto = document.querySelector('.app__card-button--curto');
const btnLongo = document.querySelector('.app__card-button--longo');
const duracaoFoco = 1500; 
const duracaoDescansoCurto = 300; 
const duracaoDescansoLongo = 900; 

// Eventos
btnFoco.addEventListener('click', () => {
  html.setAttribute('data-contexto', 'foco');
});

btnCurto.addEventListener('click', () => {
  html.setAttribute('data-contexto', 'descanso-curto');
});

btnLongo.addEventListener('click', () => {
  html.setAttribute('data-contexto', 'descanso-longo');
});
