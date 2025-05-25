const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-toggle');
const replayBtn = document.getElementById('replay');

musicBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = '🔊';
  } else {
    music.pause();
    musicBtn.textContent = '🔇';
  }
});

replayBtn.addEventListener('click', () => {
  location.reload();
});

setTimeout(() => {
  document.querySelector('.heart').style.animation = 'none';
}, 30000);