export const radioPlayerInit = () => {

  const radioNavigation = document.querySelector('.radio-navigation');
  const radioStop = document.querySelector('.radio-stop');

  const audio = new Audio();
  audio.type = 'audio/aac';

  radioStop.disabled = true;

  radioNavigation.addEventListener('change', event => {
    const target = event.target;
    radioStop.disabled = false;

    audio.src = target.dataset.radioStantion;

    audio.play();    
  });

  radioStop.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });
};