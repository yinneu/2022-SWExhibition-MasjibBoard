const navBtn = document.getElementById("navBtn");
const navBar = document.getElementById("navBar");
const link = document.querySelector("#navBar a");

const onCLick = navBtn.addEventListener("click", handleClickBtn);

let is_spread = false;

function handleClickBtn(event) {
  if (!is_spread) {
    navBar.classList.remove("hidden");
    navBar.classList.remove("shorten");
    navBar.classList.add("widen");
    is_spread = true;
  } else {
    navBar.classList.remove("widen");
    navBar.classList.add("shorten");

    setTimeout(function () {
      navBar.classList.add("hidden");
    }, 1000);
    is_spread = false;
  }
}

// 카테고리 네비바
const categoryBtn = document.querySelector(".categoryButton");
const categoryArea = document.querySelector(".categoryArea");
const grayBG = document.querySelector(".grayBG");
const body = document.getElementsByTagName("body");

categoryBtn.addEventListener("click", handeClickCtg);
grayBG.addEventListener("click", handleClickBG);

function handleClickBG(event) {
  categoryArea.style.display = "none";
  grayBG.style.display = "none";
  listCardArea.style.overflow = "auto";
}

function handeClickCtg(event) {
  categoryArea.style.display = "flex";
  grayBG.style.display = "block";
  listCardArea.style.overflow = "hidden";
}
