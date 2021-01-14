let audio = new Audio("");
let sounds = document.querySelectorAll(".sound");

function playSound(soundButton) {
  let soundSource = soundButton.getAttribute("data-sound");
  if (!soundSource) return;
  audio.pause();
  audio.currentTime = 0;
  audio.src = "assets/" + soundSource;
  audio.load();
  audio.play();
}

sounds.forEach((sound) => {
  sound.addEventListener("click", (e) => {
    playSound(e.target);
  });
});
