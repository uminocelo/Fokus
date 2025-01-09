// Variables
const html = document.querySelector('html');

const btnFoco = document.querySelector('.app__card-button--foco');
const btnCurto = document.querySelector('.app__card-button--curto');
const btnLongo = document.querySelector('.app__card-button--longo');
const appImage = document.querySelector('.app__image');
const appTitle = document.querySelector('.app__title');

const duracaoFoco = 1500; 
const duracaoDescansoCurto = 300; 
const duracaoDescansoLongo = 900; 

// Eventos
btnFoco.addEventListener('click', () => {
  changeContext('foco');
  btnFoco.classList.toggle('active');
});

btnCurto.addEventListener('click', () => {
  changeContext('descanso-curto');
  btnCurto.classList.toggle('active');
});

btnLongo.addEventListener('click', () => {
  changeContext('descanso-longo');
  btnLongo.classList.toggle('active');
});

function changeContext(context) {
  document.querySelectorAll('.app__card-button').forEach(item => {
    item.classList.remove('active');
  });
  
  html.setAttribute('data-contexto', context);
  appImage.setAttribute('src', `/imagens/${context}.png`);

  switch(context){
    case 'foco':
      appTitle.innerHTML = `Otimize sua produtividade,<br><strong class="app__title-strong">mergulhe no que importa.</strong>`;
      break;
    case 'descanso-curto':
      appTitle.innerHTML = `Que tal dar uma respirada? <br><strong class="app__title-strong">Faça uma pausa curta.</strong>`; 
      break;
    case 'descanso-longo':
      appTitle.innerHTML = `Hora de voltar para a superficie. <br><strong class="app__title-strong">Faça uma pausa longa.</strong>`; 
      break;
  }
}