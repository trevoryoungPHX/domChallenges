
document.body.onload = ()=>{displayData(person)};

let person = {
  name:"race",
  age:25,
  city:"Phoenix"
}

function displayData(data) {
  let myList = document.createElement("ul");

  for (var variable in data) {
    let myItem = document.createElement("li");
     myItem.innerHTML = variable + " - " + data[variable];
     myList.appendChild(myItem);
  }
  document.body.appendChild(myList);
}
