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
    console.log(navBar.classList);
    is_spread = true;
  } else {
    navBar.classList.remove("widen");
    navBar.classList.add("shorten");
    setTimeout(function () {
      navBar.classList.add("hidden");
    }, 1000);
    console.log(navBar.classList);
    is_spread = false;
  }
}
