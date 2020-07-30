export const radioPlayerInit = () => {

  const radioNavigation = document.querySelector('.radio-navigation');
  const radioStop = document.querySelector('.radio-stop');
  const radio = document.querySelector('.radio');
  const radioItem = document.querySelectorAll('.radio-item');
  const radioHeaderBig = document.querySelector('.radio-header__big');
  const radioCoverImg = document.querySelector('.radio-cover__img');
  const radioVolume = document.querySelector('.radio-volume');
  const radioButtonVolumeDown = document.querySelector('.radio-button__volume-down');
  const radioButtonVolumeMax = document.querySelector('.radio-button__volume-max');

  const audio = new Audio();
  audio.type = 'audio/aac';

  radioStop.disabled = true;

  let prevVolume = 1;

  const changeIconPlay = () => {
    if (audio.paused){
      radio.classList.remove('play');
      radioStop.classList.add('fa-play');
      radioStop.classList.remove('fa-stop');
    } else {
      radio.classList.add('play');
      radioStop.classList.remove('fa-play');
      radioStop.classList.add('fa-stop');
    }
  };

  const selectItem = elem => {
    radioItem.forEach(item => item.classList.remove('select'));
    elem.classList.add('select');
  }

  const toggleVolumeIcon = () => {
    if (radioVolume.value <= 0 && !audio.volume) {
      radioButtonVolumeDown.classList.remove('fa-volume-down');
      radioButtonVolumeDown.classList.add('fa-volume-off');
    } else {     
      radioButtonVolumeDown.classList.add('fa-volume-down');
      radioButtonVolumeDown.classList.remove('fa-volume-off');
    }
  };

  const toggleVolume = () => {   
    if (radioVolume.value && audio.volume) {
      prevVolume = radioVolume.value;
      audio.volume = 0;
      radioVolume.value = 0;      
    } else {
      audio.volume = prevVolume / 100;
      radioVolume.value = prevVolume;
    }
  };

  radioNavigation.addEventListener('change', event => {
    const target = event.target;
    const parrent = target.closest('.radio-item');
    selectItem(parrent);

    const title = parrent.querySelector('.radio-name').textContent;
    radioHeaderBig.textContent = title;

    const urlImg = parrent.querySelector('.radio-img').src;
    radioCoverImg.src = urlImg;

    radioStop.disabled = false;
    audio.src = target.dataset.radioStantion;
    audio.play();
    changeIconPlay();   
  });

  radioStop.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
    changeIconPlay();
  });

  radioVolume.addEventListener('input', () => {
    audio.volume = radioVolume.value / 100;
    prevVolume = radioVolume.value;
    toggleVolumeIcon();
  });

  radioButtonVolumeDown.addEventListener('click', toggleVolume);
  radioButtonVolumeDown.addEventListener('click', toggleVolumeIcon);

  radioButtonVolumeMax.addEventListener('click', () => {
    audio.volume = 1;
    radioVolume.value = radioVolume.max;
  });
  
  radioButtonVolumeMax.addEventListener('click', toggleVolumeIcon);
};