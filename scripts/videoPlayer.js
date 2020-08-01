import { addZero } from './supScript.js';

export const videoPlayerInit = () => {

  const videoPlayer = document.querySelector('.video-player');
  const videoButtonPlay = document.querySelector('.video-button__play');
  const videoButtonStop = document.querySelector('.video-button__stop');
  const videoTimePassed = document.querySelector('.video-time__passed');
  const videoTimeTotal = document.querySelector('.video-time__total');
  const videoProgress = document.querySelector('.video-progress');
  const videoButtonExpand = document.querySelector('.video-button__expand');
  const videoVolume = document.querySelector('.video-volume');
  const videoButtonVolumeDown = document.querySelector('.video-button__volume-down');
  const videoButtonVolumeMax = document.querySelector('.video-button__volume-max');

  let prevVolume = 1;

  //смена иконок
  const toggleIcon = () => {
    if (videoPlayer.paused) {
      videoButtonPlay.classList.remove('fa-pause');
      videoButtonPlay.classList.add('fa-play');
    } else {
      videoButtonPlay.classList.add('fa-pause');
      videoButtonPlay.classList.remove('fa-play');
    }
  };
  
  //запуск и пауза видео
  const togglePlay = () => {
    if (videoPlayer.paused) {
      videoPlayer.play();
    } else {
      videoPlayer.pause();
    }
  };

  //остановка видео
  const stopPlay = () => {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  };

  const toggleVolumeIcon = () => {
    if (videoVolume.value <= 0 && !videoPlayer.volume) {
      videoButtonVolumeDown.classList.remove('fa-volume-down');
      videoButtonVolumeDown.classList.add('fa-volume-off');
    } else {     
      videoButtonVolumeDown.classList.add('fa-volume-down');
      videoButtonVolumeDown.classList.remove('fa-volume-off');
    }
  };

  const toggleVolume = () => {   
    if (videoVolume.value && videoPlayer.volume) {
      prevVolume = videoVolume.value;
      videoPlayer.volume = 0;
      videoVolume.value = 0;      
    } else {
      videoPlayer.volume = prevVolume / 100;
      videoVolume.value = prevVolume;
    }
  };

  videoPlayer.addEventListener('click', togglePlay);
  videoButtonPlay.addEventListener('click', togglePlay);

  videoPlayer.addEventListener('play', toggleIcon);
  videoPlayer.addEventListener('pause', toggleIcon);

  videoButtonStop.addEventListener('click', stopPlay);

  //обновление времени видео и движение ползунка
  videoPlayer.addEventListener('timeupdate', () => {
    const currentTime = videoPlayer.currentTime;
    const duration = videoPlayer.duration;
    
    //движение ползунка
    videoProgress.value = (currentTime / duration) * 100;

    let minutePassed = Math.floor(currentTime / 60);
    let secondPassed = Math.floor(currentTime % 60);

    let minuteTotal = Math.floor(duration / 60);
    let secondTotal = Math.floor(duration % 60);  

    videoTimePassed.textContent = `${addZero(minutePassed)}:${addZero(secondPassed)}`;
    videoTimeTotal.textContent = `${addZero(minuteTotal)}:${addZero(secondTotal)}`;
  });

  //изменение положения ползунка
  videoProgress.addEventListener('input', () => {
    const duration = videoPlayer.duration;
    const value = videoProgress.value;

    videoPlayer.currentTime = (value * duration) / 100;
  });

  videoButtonExpand.addEventListener('click', () => {
    videoPlayer.requestFullscreen();
  });

  videoVolume.addEventListener('input', () => {
    videoPlayer.volume = videoVolume.value / 100;
    prevVolume = videoVolume.value;
    toggleVolumeIcon();
  });

  videoButtonVolumeDown.addEventListener('click', toggleVolume);
  videoButtonVolumeDown.addEventListener('click', toggleVolumeIcon);

  videoButtonVolumeMax.addEventListener('click', () => {
    videoPlayer.volume = 1;
    videoVolume.value = videoVolume.max;
  });
  
  videoButtonVolumeMax.addEventListener('click', toggleVolumeIcon);
};