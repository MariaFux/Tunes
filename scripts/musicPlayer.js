export const musicPlayerInit = () => {

  const audioNavigation = document.querySelector('.audio-navigation');
  const audio = document.querySelector('.audio');
  const audioButtonPlay = document.querySelector('.audio-button__play');
  const audioPlayer = document.querySelector('.audio-player');

  const playList = ['hello', 'flow', 'speed'];

  let trackInndex = 0;
  
  audioNavigation.addEventListener('click', event => {
    const target = event.target;

    if (target.classList.contains('audio-button__play')) {
      audio.classList.toggle('play');
      audioButtonPlay.classList.toggle('fa-play');
      audioButtonPlay.classList.toggle('fa-pause');

      if (audioPlayer.paused){
        audioPlayer.play();
      } else {
        audioPlayer.pause();
      }
    }
  });
};