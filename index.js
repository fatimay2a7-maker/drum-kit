const drumButtons = document.querySelectorAll(".drum");
const audios = [
  "crash",
  "kick-bass",
  "snare",
  "tom-1",
  "tom-2",
  "tom-3",
  "tom-4",
];
function playMusic(i) {
  let audio = new Audio("sounds/" + audios[i] + ".mp3");
  audio.play();

  const button = drumButtons[i];
  button.classList.add("pressed");

  setTimeout(() => {
    button.classList.remove("pressed");
  }, 200);
}

// Keyboard
document.addEventListener("keypress", function (event) {
  for (let i = 0; i < drumButtons.length; i++) {
    if (drumButtons[i].textContent === event.key) {
      playMusic(i);
    }
  }
});

// Click
for (let i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", function () {
    playMusic(i);
  });
}
