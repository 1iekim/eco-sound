const navActive = document.querySelectorAll('.nav__item');
const logo = document.querySelector('.logo__img');
const playBtn = document.querySelector('.main__btn');
const main = document.querySelector('.main');
let activeElem = document.querySelector('.active');
let isPlay = false;

const audio = new Audio();

function active(){
  navActive.forEach(elem => elem.classList.remove('active'));
  logo.classList.remove('active');
  this.classList.add('active');
  main.style.backgroundImage = `url('./assets/img/${this.dataset.item}.jpg')`;
  activeElem = document.querySelector('.active');
  if(isPlay){
    playBtn.click();
    playBtn.click();
  }
}

function playAudio(){
  if(isPlay){
    audio.pause();
    this.classList.remove('pause');
  }
  if(!isPlay){
    audio.src = `./assets/audio/${activeElem.dataset.item}.mp3`;
    audio.currentTime = 0;
    audio.play();
    this.classList.add('pause');
  }
  isPlay = !isPlay;
  console.log(isPlay);
}

navActive.forEach(elem => elem.addEventListener('click', active));
logo.addEventListener('click', active);

playBtn.addEventListener('click', playAudio);
