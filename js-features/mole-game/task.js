const dead = document.querySelector("#dead");
const lost = document.querySelector("#lost");
const holes = document.querySelectorAll(".hole");

holes.forEach((item) => {
  item.addEventListener("click", function checkHole() {

    item.classList.contains("hole_has-mole")?
      dead.textContent = Number(dead.textContent) + 1:
      lost.textContent = Number(lost.textContent) + 1;
  

    if (Number(dead.textContent) === 10) {
      alert("Вы победили");
      dead.textContent = 0;
      lost.textContent = 0;
    }

    if (Number(lost.textContent) === 5) {
      alert("Вы проиграли");
      dead.textContent = 0;
      lost.textContent = 0;
    }
  });
});
