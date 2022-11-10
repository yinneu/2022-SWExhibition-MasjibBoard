const detail = document.getElementById("cardDetail");
const closeBtn = document.getElementById("detailClose");
const messageArea = document.getElementById("messageArea");

if (media_desktop.matches) {
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
}

if (media_mobile_vertical.matches) {
  const onClose = closeBtn.addEventListener("click", handleClose);
  const root = document.querySelector(".root");
  let isSpread = false;

  console.dir(window);
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", handleClick);
  }
  function handleClick(event) {
    console.dir(cardArea.style);
    const clickedCard = event.target;
    detail.classList.remove("hidden");
    detail.classList.remove("slide_down");
    detail.classList.add("silde_up");
    root.style.position = "fixed";
  }

  function handleClose(event) {
    detail.classList.remove("silde_up");
    detail.classList.add("slide_down");
    isSpread = false;
    setTimeout(function () {
      detail.classList.add("hidden");
    }, 500);

    root.style.position = "static";
  }
}
