
document.body.onload = changeColors;

function changeColors () {
document.getElementById('change-header').style.color = "red";
let parArr = document.getElementsByTagName("p");
for(let i = 0; i<parArr.length; i++) {
  parArr[i].style.color = "blue";
  parArr[i].style.fontSize = "10px";
}
}
