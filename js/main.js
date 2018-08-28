var result = document.getElementById('screen');
function calc(nb){
  result.value += nb;
}


function adi(){
  console.log(result.value+result.value);
}


function clr(){
  result.value="";
}
