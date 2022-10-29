const foods = document.getElementById("iconArea").children;
const positionX = [4, 16, 35, 45, 54, 61, 61, 74, 76, 86, 91];
const positionY = [49, 78, 17, 90, 36, 11, 71, 38, 94, 63, 25];

let i = 0;
for (let i = 0; i < 11; i++) {
  foods[i].style.top = positionY[i] + "vh";
  foods[i].style.left = positionX[i] + "vw";
}
