let display = document.getElementById('display')

function buttonforclick (input){
display.value += input;
}

function displayClear(){
display.value ="";
}
function displayresult(){
  try{
    display.value = eval(display.value)

  }
  catch(error){
display.value = "error"
  }

}