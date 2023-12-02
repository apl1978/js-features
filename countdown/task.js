const timer = document.getElementById("timer");
count = Number(timer.textContent);
const intervalId = setInterval(() => {
  if ( count > 0) {
    count--;
    timer.textContent = count;
  } else {
    clearInterval(intervalId);
    alert("Вы победили в конкурсе!");
  }
}, 1000);
