const area = document.getElementById("listCardArea");
//const onScroll = area.addEventListener("wheel", checkScrollDirection);
const cards = document.getElementsByClassName("listCard");

for (let i = 0; i < 40; i++) {
  const card = document.createElement("div");
  card.classList.add("listCard");
  card.classList.add("aos-animate");
  card.setAttribute("data-aos", "fade-up");
  card.setAttribute("data-aos-anchor-placement", "center-bottom");
  area.appendChild(card);
}

// function checkScrollDirection(event) {
//   for (let i = 0; i < cards.length; i++) {
//     const clientRect = cards[i].getBoundingClientRect();
//     const relativeTop = clientRect.top;
//     //console.log(relativeTop);
//     if (checkScrollDirectionIsUp(event)) {
//       console.log("UP");
//       if (relativeTop > -50 && relativeTop < -10) {
//         cards[i].classList.remove("invisible");
//         cards[i].classList.remove("deleted");
//         cards[i].classList.add("created");
//       }
//       if (relativeTop > 650 && relativeTop < 800) {
//         cards[i].classList.remove("created");
//         cards[i].classList.add("deleted");
//         setTimeout(function () {
//           cards[i].classList.add("invisible");
//         }, 500);
//       }
//     } else {
//       console.log("Down");
//       if (relativeTop > -50 && relativeTop < 10) {
//         cards[i].classList.remove("created");
//         cards[i].classList.add("deleted");
//         setTimeout(function () {
//           cards[i].classList.add("invisible");
//         }, 500);
//       }
//       if (relativeTop > 650 && relativeTop < 800) {
//         cards[i].classList.remove("invisible");
//         cards[i].classList.remove("deleted");
//         cards[i].classList.add("created");
//       }
//     }
//   }
//   console.log(" ");
// }

// function checkScrollDirectionIsUp(event) {
//   if (event.wheelDelta) {
//     return event.wheelDelta > 0;
//   }
//   return event.deltaY < 0;
// }
