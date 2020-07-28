import { videoPlayerInit } from './videoPlayer.js';
import { radioPlayerInit } from './radioPlayer.js';
import { musicPlayerInit } from './musicPlayer.js'; 

const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');

const deactivationPlayer = () => {
  temp.style.display = 'none';
  playerBtn.forEach((item) => { item.classList.remove('active')});
  playerBlock.forEach((item) => { item.classList.remove('active')});
};

//перебор кнопок разделов
playerBtn.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    deactivationPlayer();
    //активация стиля кнопки
    btn.classList.add('active');
    //активация содержимого раздела
    playerBlock[i].classList.add('active');
  })
});

videoPlayerInit();