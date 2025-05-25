const musicBtn = document.getElementById('music-toggle');
const music = document.getElementById('bg-music');
music.volume = 0.2;
const typeSound = document.getElementById('type-sound');
typeSound.volume = 0.2;
const text = document.getElementById('text');
const fullText = "Bonne fête Maman";
text.textContent = "";
let i = 0;
const replayBtn = document.getElementById('replay');

musicBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = '🔊';
  } else {
    music.pause();
    typeSound.pause();
    musicBtn.textContent = '🔇';
  }
});

function typeWriter() {
  if (i === 0) {
    typeSound.currentTime = 1;
    typeSound.loop = true;
    typeSound.play();
  }
  if (i < fullText.length) {
    text.textContent += fullText.charAt(i);
    i++;
    setTimeout(typeWriter, 120);
  } else {
    typeSound.pause();
    typeSound.currentTime = 1;
    typeSound.loop = false;
  }
}

setTimeout(() => {
  document.querySelector('.heart-img').classList.remove('hide');
  typeWriter();
}, 3000);

setTimeout(() => {
  document.querySelector('.heart').style.animation = 'none';
  music.pause();
  musicBtn.textContent = '🔇';
}, 30000);

replayBtn.addEventListener('click', () => {
  location.reload();
});