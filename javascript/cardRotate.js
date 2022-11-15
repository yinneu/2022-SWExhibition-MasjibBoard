const cards = document.getElementsByClassName("card");
const cardArea = document.getElementById("cardArea");
const ANGLE = 360 / cards.length;
let onHover = false;
let angle_after = 0;

const media_mobile_vertical = matchMedia(
  "(max-width: 786px)"
);

//랩탑 or 데스크탑일 때 카드 배치
// if (!media_mobile_vertical.matches) {
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.transform = `
      rotate(${ANGLE * i}deg) translate(600px) rotate(90deg)`;
  }
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("mouseenter", cardHover);
    cards[i].addEventListener("mouseleave", cardOut);
  }

  window.addEventListener("mousewheel", handleScroll);

  function cardHover(event) {
    event.target.classList.add("cardScale");
  }
  function cardOut(event) {
    event.target.classList.remove("cardScale");
  }


  function handleScroll(event) {
    let direction = event.wheelDelta;
    // if (onHover == true) {
      if (direction > 0) {
        angle_after -= 35;
      } else {
        angle_after += 35;
      }
      cardArea.style.transform = "rotate(" + angle_after + "deg";
    // }
  }
// }

// 모바일 랜덤 카드 리스트
// else {
//   for (let i = 0; i < cards.length; i++) {
//     cards[i].style.transform = `
//       rotate(${ANGLE * i}deg) translate(400px) rotate(90deg)`;
//   }
//   for (let i = 0; i < cards.length; i++) {
//     cards[i].addEventListener("mouseenter", cardHover);
//     cards[i].addEventListener("mouseleave", cardOut);
//   }

//   cardArea.addEventListener("mousewheel", handleScroll);

//   function handleScroll(event) {
//     let direction = event.wheelDelta;
//     if (direction > 0) {
//       angle_after -= 35;
//     } else {
//       angle_after += 35;
//     }
//     cardArea.style.transform = "rotate(" + angle_after + "deg";
//   }
//}
