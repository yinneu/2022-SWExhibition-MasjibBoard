const detail = document.getElementById("cardDetail");
const closeBtn = document.getElementById("detailClose");
const onClose = closeBtn.addEventListener("click", handleClose);

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", handleClick);
}

function handleClick(event) {
  const clickedCard = event.target;
  detail.classList.remove("hidden");
}
function handleClose(event) {
  detail.classList.add("hidden");
}
