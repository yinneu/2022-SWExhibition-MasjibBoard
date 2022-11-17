const cards = document.getElementsByClassName("card");
const cardArea = document.getElementById("cardArea");
const msg = document.getElementById("messageArea");
const ANGLE = 360 / cards.length;
let onHover = false;
let angle_after = 0;

// 카드 원형으로 배치
for (let i = 0; i < cards.length; i++) {
  cards[i].style.transform = `
    rotate(${ANGLE * i}deg) translate(600px) rotate(90deg)`;
}
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mouseenter", cardHover);
  cards[i].addEventListener("mouseleave", cardOut);
}

function cardHover(event) {
  event.target.classList.add("cardScale");
}
function cardOut(event) {
  event.target.classList.remove("cardScale");
}

// 마우스 휠 작동시 카드 로테이트
window.addEventListener("mousewheel", handleScroll);
function handleScroll(event) {
  msg.style.display = "none";
  let direction = event.wheelDelta;
  if (direction > 0) {
    angle_after -= 35;
  } else {
    angle_after += 35;
  }
  // 상세페이지 close 에만 rotate
  if (!isOpen) {
    cardArea.style.transform = "rotate(" + angle_after + "deg";
  }
}

// 터치 스크롤시 카드 로테이트
let startx, starty, endx, endy;
window.addEventListener("touchstart", (event) => {
  msg.style.display = "none";
  startx = event.changedTouches[0].screenX;
  starty = event.changedTouches[0].screenY;
});
window.addEventListener("touchend", (event) => {
  endx = event.changedTouches[0].screenX;
  endy = event.changedTouches[0].screenY;

  let rightRotate = starty - endy;
  let leftRotate = endy - starty;

  if (rightRotate > 30) {
    angle_after -= 100;
  } else if (leftRotate > 30) {
    angle_after += 100;
  }
  if (!isOpen) {
    cardArea.style.transform = "rotate(" + angle_after + "deg";
  }
});
