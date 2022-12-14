const keys = document.querySelectorAll(".keys .key");
const volumeEl = document.querySelector(".volume input");
const showKeysEl = document.querySelector(".show-keys input");

let audio = new Audio("tunes/;.wav");
let audioKeys = [];

const playTune = (key) => {
  audio.src = `tunes/${key}.wav`;
  audio.play();

  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 200);
};

keys.forEach((key) => {
  audioKeys.push(key.dataset.key);
  key.addEventListener("click", () => playTune(key.dataset.key));
});

const showHideKeys = () => {
  keys.forEach((key) => key.classList.toggle("hide"));
};

const pressedKey = (e) => {
  if (audioKeys.includes(e.key)) playTune(e.key);
};

const changeVolume = (e) => {
  audio.volume = e.target.value;
};

showKeysEl.addEventListener("click", showHideKeys);
volumeEl.addEventListener("input", changeVolume);
document.addEventListener("keydown", pressedKey);
