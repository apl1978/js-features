const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

(() => {
  let playing = true,
    activeHole = 1;

  const stop = () => (playing = true),
    getHole = (index) => document.getElementById(`hole${index}`),
    deactivateHole = (index) => (getHole(index).className = "hole"),
    activateHole = (index) => (getHole(index).className = "hole hole_has-mole"),
    next = () =>
      setTimeout(() => {
        if (!playing) {
          return;
        }
        deactivateHole(activeHole);
        activeHole = Math.floor(1 + Math.random() * 9);
        activateHole(activeHole);
        next();
      }, 800);

  for (let index = 1; index < 10; index++) {
    getHole(index).onclick = function () {
      if (getHole(index).classList.contains("hole_has-mole")) {
        dead.textContent = Number(dead.textContent) + 1;
        if (Number(dead.textContent) >= 10) {
          playing = false;
          alert("Поздравляю, вы победили!");
        }
      } else {
        lost.textContent = Number(lost.textContent) + 1;

        if (Number(lost.textContent) >= 5) {
          playing = false;
          alert("Вы проиграли.");
        }
      }
    };
  }

  next();
})();
