const countP1Display = document.getElementById('countP1');
const countP2Display = document.getElementById('countP2');
const lingkaran = document.getElementById('lingkaran');
const button = document.getElementById('button');

let skorP1 = 0;
let skorP2 = 0;
let gameDimulai = false;
let intervalId;

function startCountdown(detik) {
  function tick() {
    detik--;

    if (detik === 0) {
      lingkaran.style.backgroundColor = 'green';
      button.textContent = "Tekan!!"
      gameDimulai = true;
      clearInterval(intervalId);
    }
  }

  intervalId = setInterval(tick, 1000);
}

function resetGame() {
  gameDimulai = false;
  lingkaran.style.backgroundColor = 'brown';
  button.textContent = "Mulai lagi"
  button.style.opacity = "1";
  button.disabled = false
  
}

button.addEventListener('click', function () {
  let detik = Math.ceil(Math.random() * 3) + 1;

  button.textContent = "Siap siap"
  lingkaran.style.backgroundColor = 'brown';

  startCountdown(detik);
  button.disabled = true
  button.style.opacity = "0.5";

});

document.addEventListener('keydown', function (event) {
  if (!gameDimulai) {
    return;
  }

  if (event.key === ' ') {
    skorP1++;
    countP1Display.textContent = skorP1;
    resetGame();
  }

  if (event.key === 'Enter') {
    skorP2++;
    countP2Display.textContent = skorP2;
    resetGame();
  }
});