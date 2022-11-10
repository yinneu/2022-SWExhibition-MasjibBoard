const area = document.getElementById("listCardArea");
const cards = document.getElementsByClassName("listCard");
const topBtn = document.querySelector("#toTop");

// for (let i = 0; i < 30; i++) {
//   const card = document.createElement("div");
//   const img = document.createElement("img");
//   img.src =
//     "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200325_161%2F1585120789944V601e_JPEG%2FH1qgWYBsnsQ4Zty-Atrlsrjm.jpeg.jpg";

//   img.classList.add("resImg");
//   card.appendChild(img);

//   card.classList.add("listCard");
//   card.classList.add("aos-animate");
//   card.setAttribute("data-aos", "flip-right");
//   card.setAttribute("data-aos-duration", "500");
//   card.setAttribute("data-aos-anchor-placement", "center-bottom");
//   area.appendChild(card);
// }

topBtn.addEventListener("click", () => {
  scrollIntoView("#top");
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});
