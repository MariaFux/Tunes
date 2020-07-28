import { videoPlayerInit } from './videoPlayer.js';
import { radioPlayerInit } from './radioPlayer.js';
import { musicPlayerInit } from './musicPlayer.js'; 

const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');

//перебор кнопок разделов
playerBtn.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    //активация стиля кнопки
    btn.classList.add('active');
    //активация содержимого раздела
    playerBlock[i].classList.add('active');
  })
});