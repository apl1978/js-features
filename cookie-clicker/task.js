const cookie = document.getElementById("cookie");
const clicker__counter = document.getElementById("clicker__counter");
cookie.onclick = () => {
  cookie.height = cookie.width == 200 ? cookie.height + 20 : cookie.height - 20;
  cookie.width = cookie.width == 200 ? cookie.width + 20 : 200;
  clicker__counter.textContent = Number(clicker__counter.textContent) + 1;
};
