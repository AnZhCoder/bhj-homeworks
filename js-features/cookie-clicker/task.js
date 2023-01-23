const imageClicker = document.querySelector(".clicker__cookie");
const clickerCounter = document.querySelector("#clicker__counter");
const clickerSpeed = document.querySelector("#clicker__speed");
const startTime = new Date().getTime() / 1000;


imageClicker.addEventListener("click", countClick);

function countClick() {
  imageClicker.height === 128
    ? (imageClicker.height = 200)
    : (imageClicker.height = 128);
  imageClicker.width === 200
    ? (imageClicker.width = 250)
    : (imageClicker.width = 200);

  clickerCounter.textContent = Number(clickerCounter.textContent) + 1;
  clickerSpeed.textContent = (Number(clickerCounter.textContent) / (new Date().getTime() / 1000 - startTime).toFixed(2)).toFixed(2);
}
