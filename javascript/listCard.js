const area = document.getElementById("listCardArea");
const cards = document.getElementsByClassName("listCard");
const topBtn = document.querySelector("#toTop");

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
