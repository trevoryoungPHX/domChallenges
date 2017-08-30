
document.body.onload = addElement;

function addElement () {
let myDiv = document.createElement("div");
myDiv.innerHTML = "Trevor Young";
document.body.appendChild(myDiv);
}
