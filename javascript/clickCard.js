const detail = document.getElementById("cardDetail");
const closeBtn = document.getElementById("detailClose");
const messageArea = document.getElementById("messageArea");
let media_mobile_vertical = window.matchMedia("(max-width:786px)");

// 상세페이지 open 확인
let isOpen = false;
let scard;

// 메인페이지 카드 클릭시 랜덤 맛집 카드 보이기
const onClose = closeBtn.addEventListener("click", handleClose);
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", handleClick);
}

// 상세페이지 open
// top 변경시 silde up도 변경
function handleClick(event) {
  //event.target.classList.remove("cardScale");
  detail.classList.remove("hidden");
  if (media_mobile_vertical.matches) {
    // detail.style.top = "150px";
    detail.style.top = "13vh";
  }
  isOpen = true;
}

// 상세페이지
function handleClose(event) {
  detail.classList.add("hidden");
  if (media_mobile_vertical.matches) {
    detail.style.top = "100%";
  }
  location.reload();
}
