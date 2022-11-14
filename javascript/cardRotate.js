const cards = document.getElementsByClassName("card");
const cardArea = document.getElementById("cardArea");
const ANGLE = 360 / cards.length;
let onHover = false;
let angle_after = 0;

const media_desktop = matchMedia("(min-width: 1025px)");
const media_mobile_vertical = matchMedia(
  "(max-device-width: 600px) and (max-device-height: 1000px)"
);
const media_mobile_horizontal = matchMedia(
  "(max-device-width: 900px) and (max-device-height: 500px)"
);

//랩탑 or 데스크탑일 때 카드 배치
if (media_desktop.matches) {
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.transform = `
      rotate(${ANGLE * i}deg) translate(600px) rotate(90deg)`;
  }
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("mouseenter", cardHover);
    cards[i].addEventListener("mouseleave", cardOut);
  }

  //카드 area에 마우스 커서가 올라갔을 때, 스크롤이 감지 되면 카드 area를 회전
  cardArea.addEventListener("mouseenter", handleHover);
  cardArea.addEventListener("mouseleave", handleMouseOut);
  cardArea.addEventListener("mousewheel", handleScroll);

  function cardHover(event) {
    event.target.classList.add("cardScale");
  }
  function cardOut(event) {
    event.target.classList.remove("cardScale");
  }

  function handleMouseOut() {
    onHover = false;
  }
  function handleHover() {
    onHover = true;
  }

  function handleScroll(event) {
    let direction = event.wheelDelta;
    if (onHover == true) {
      if (direction > 0) {
        angle_after -= 35;
      } else {
        angle_after += 35;
      }
      cardArea.style.transform = "rotate(" + angle_after + "deg";
    }
  }
}

//폰 세로화면일 때 카드 무한 스크롤
if (media_mobile_vertical.matches) {
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.transform = `
      rotate(${ANGLE * i}deg) translate(400px) rotate(90deg)`;
  }
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("mouseenter", cardHover);
    cards[i].addEventListener("mouseleave", cardOut);
  }

  cardArea.addEventListener("mousewheel", handleScroll);

  function handleScroll(event) {
    let direction = event.wheelDelta;
    if (direction > 0) {
      angle_after -= 35;
    } else {
      angle_after += 35;
    }
    cardArea.style.transform = "rotate(" + angle_after + "deg";
  }
}
