const area = document.getElementById("listCardArea");
const cards = document.getElementsByClassName("listCard");

for (let i = 0; i < 30; i++) {
  const card = document.createElement("div");
  const img = document.createElement("img");
  img.src =
    "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200325_161%2F1585120789944V601e_JPEG%2FH1qgWYBsnsQ4Zty-Atrlsrjm.jpeg.jpg";

  img.classList.add("resImg");
  card.appendChild(img);

  card.classList.add("listCard");
  card.classList.add("aos-animate");
  card.setAttribute("data-aos", "flip-right");
  card.setAttribute("data-aos-duration", "500");
  card.setAttribute("data-aos-anchor-placement", "center-bottom");
  area.appendChild(card);
}
