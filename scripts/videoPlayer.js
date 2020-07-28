export const videoPlayerInit = () => {

  const videoPlayer = document.querySelector('.video-player');
  const videoButtonPlay = document.querySelector('.video-button__play');
  const videoButtonStop = document.querySelector('.video-button__stop');
  const videoTimePassed = document.querySelector('.video-time__passed');
  const videoTimeTotal = document.querySelector('.video-time__total');

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

  //добавление нуля к минутам и секундам, если < 10
  const addZero = n => n < 10 ? '0' + n : n;

  videoPlayer.addEventListener('click', togglePlay);
  videoButtonPlay.addEventListener('click', togglePlay);

  videoPlayer.addEventListener('play', toggleIcon);
  videoPlayer.addEventListener('pause', toggleIcon);

  videoButtonStop.addEventListener('click', stopPlay);

  //обновление времени видео
  videoPlayer.addEventListener('timeupdate', () => {
    const currentTime = videoPlayer.currentTime;
    const duration = videoPlayer.duration;

    let minutePassed = Math.floor(currentTime / 60);
    let secondPassed = Math.floor(currentTime % 60);

    let minuteTotal = Math.floor(duration / 60);
    let secondTotal = Math.floor(duration % 60);  

    videoTimePassed.textContent = `${addZero(minutePassed)}:${addZero(secondPassed)}`;
    videoTimeTotal.textContent = `${addZero(minuteTotal)}:${addZero(secondTotal)}`;
  });
};