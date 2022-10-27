const navBtn = document.getElementById("navBtn");
const navBar = document.getElementById("navBar");
const onCLick = navBtn.addEventListener("click", handleClickBtn);
let is_spread = false;

function handleClickBtn(event) {
    if(!is_spread) {
        navBar.classList.remove("hidden");
        is_spread = true;
    }else {
        navBar.classList.add("hidden");
        is_spread = false;
    }
}