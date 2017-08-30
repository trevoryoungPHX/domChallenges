
document.body.onload = genBlocks;

function genBlocks() {
  for(var i=0; i<10; i++){
      let myDiv = document.createElement('div');
      if(i%2==0) {
        myDiv.className = 'red';
      } else {
        myDiv.className = 'black';
      }
      document.body.appendChild(myDiv);
  }
}
