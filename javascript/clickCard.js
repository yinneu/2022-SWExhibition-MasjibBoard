const detail = document.getElementById("cardDetail");
const closeBtn = document.getElementById("detailClose");
const messageArea = document.getElementById("messageArea");

// 모바일 화면 카드 디테일
if (media_mobile_vertical.matches) {
  const onClose = closeBtn.addEventListener("click", handleClose);
  const root = document.querySelector(".root");
  // let isSpread = false;

  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", handleClick);
  }
  function handleClick(event) {
    //console.log('dflskfjkdfskd');
    const clickedCard = event.target;
    detail.classList.remove("hidden");
    detail.classList.remove("slide_down");
    detail.classList.add("silde_up");
  }

  function handleClose(event) {
    detail.classList.remove("silde_up");
    detail.classList.add("slide_down");
    // isSpread = false;
    setTimeout(function () {
      detail.classList.add("hidden");
      location.reload();
    }, 600);
  }
}
// 데스크탑 화면 카드 디테일
else {
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
    location.reload();
  }
}
