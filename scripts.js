// Variables
const html = document.querySelector('html');

const btnFoco = document.querySelector('.app__card-button--foco');
const btnCurto = document.querySelector('.app__card-button--curto');
const btnLongo = document.querySelector('.app__card-button--longo');
const btnStartPause = document.querySelector('#start-pause');

const appImage = document.querySelector('.app__image');
const appTitle = document.querySelector('.app__title');

const appMusicInput = document.querySelector('#alternar-musica');
const appMusic = new Audio('/sons/luna-rise-part-one.mp3');
appMusic.loop = true;

const duracaoFoco = 1500; 
const duracaoDescansoCurto = 300; 
const duracaoDescansoLongo = 900; 

let tempoDecorrido = 5;

let contadorId = undefined;
const contagemRegressiva = () => {
  if (isStartOrPause()) {
    document.querySelector('#start-pause span').textContent = 'Pausar';
  }

  if (tempoDecorrido === 0) {
    const appFinishedMusic = new Audio('/sons/beep.mp3');
    clearInterval(contadorId);
    contadorId = undefined;
    appFinishedMusic.play();
    tempoDecorrido = 5;

    return;
  }

  tempoDecorrido = tempoDecorrido - 1;
};

btnStartPause.addEventListener('click', () => {
  if (isStartOrPause()) {
    document.querySelector('#start-pause span').textContent = 'Iniciando';
    contadorId = setInterval(contagemRegressiva, 1000);
    const appStartMusic = new Audio('/sons/play.wav');
    appStartMusic.play();
  } else {
    const appStopMusic = new Audio('/sons/pause.mp3');
    clearInterval(contadorId);
    appStopMusic.play();
    contadorId = undefined;
    document.querySelector('#start-pause span').textContent = 'Iniciar';
  }
});

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

appMusicInput.addEventListener('change', () => {
  appMusic.paused ? appMusic.play() : appMusic.pause();
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

function isStartOrPause() {
  let text = document.querySelector('#start-pause span');
  return text.textContent == 'Iniciar' || text.textContent == 'Iniciando';
}