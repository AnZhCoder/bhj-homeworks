const timer = document.querySelector("#timer");
const hours = 00;
const minutes = 00;
const seconds = 20;

const date = new Date(2023, 0, 1, hours, minutes, seconds);

const intervalID = setInterval(() => {
  let hh = date.getHours().toString().padStart(2, 0);
  let mm = date.getMinutes().toString().padStart(2, 0);
  let ss = date.getSeconds().toString().padStart(2, 0);
  date.setSeconds(date.getSeconds() - 1);
  timer.textContent = `${hh}:${mm}:${ss}`;

  if (hh === "00" && mm === "00" && ss === "00") {
    let link = document.querySelector(".link");
    link.click();
    clearInterval(intervalID);
  }
}, 1000);
