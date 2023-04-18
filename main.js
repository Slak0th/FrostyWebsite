window.onload = () => {
    const audio = document.getElementById('myAudio');
    audio.loop = true;
    document.addEventListener('click', () => {
      audio.volume = 0.05;
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    });
    audio.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    });
  };