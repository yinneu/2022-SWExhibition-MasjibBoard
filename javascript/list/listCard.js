const area = document.getElementById("listCardArea");
const cards = document.getElementsByClassName("listCard");

for (let i = 0; i < 30; i++) {
  const card = document.createElement("div");
  card.classList.add("listCard");
  card.classList.add("aos-animate");
  card.setAttribute("data-aos", "flip-right");
  card.setAttribute("data-aos-duration", "500");
  card.setAttribute("data-aos-anchor-placement", "center-bottom");
  area.appendChild(card);
}
