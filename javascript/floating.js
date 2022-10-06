const foods = document.getElementById("iconArea").children;
const positionX = [64, 238, 526, 677, 812, 925, 925, 1106, 1141, 1291, 1359];
const positionY = [347, 544, 120, 628, 250, 78, 502, 264, 656, 442, 179];

let i = 0;
for (let i = 0; i < 11; i++) {
  foods[i].style.top = positionY[i] + "px";
  foods[i].style.left = positionX[i] + "px";
}
