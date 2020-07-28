export const videoPlayerInit = () => {

  const videoPlayer = document.querySelector('.video-player');

  videoPlayer.addEventListener('click', () => {
    if (videoPlayer.paused) {
      videoPlayer.play();
    } else {
      videoPlayer.pause();
    }    
  });

};