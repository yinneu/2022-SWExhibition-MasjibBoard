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
const categoryBtn = document.querySelector("#categoryBtn");
const categoryArea = document.querySelector(".categoryArea");

categoryBtn.addEventListener("click", handeClickCategory);
let is_open = false;

function handeClickCategory(event) {
  if (is_open) {
    //닫을 때
    categoryArea.style.paddingTop = "0";
    categoryArea.style.height = "50px";
    categoryBtn.style.borderRadius = "10px";
    is_open = false;
  } else {
    //열 때
    categoryArea.style.paddingTop = "50px";
    categoryArea.style.height = "200px";
    categoryBtn.style.borderRadius = "10px 10px 0px 0px";
    is_open = true;
  }
}
