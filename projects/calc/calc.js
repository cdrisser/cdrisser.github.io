
let displaystr = "";
let total =0;
const num = document.getElementsByClassName('number');
var resetDisplay = false;
//creates border so user can see what button they pushed
for(var i=0; i<num.length; i++){
num[i].addEventListener("mousedown", (event)=>{
  event.target.style.border = "2px solid black";
})}
//creates border so user can see what button they pushed
for(var i=0; i<num.length; i++){
num[i].addEventListener("mouseup", (event)=>{
  event.target.style.border = "";
})}

function operation(a=""){
    displaystr += a;
    document.getElementById('display').innerHTML = displaystr;

}

function action(input){
  if(displaystr == ''){
    dispWarning();
  }
  else{
    currentMath(input);
    let storeDisplayStr = document.getElementById('currentmath').innerHTML;
    document.getElementById('currentmath').innerHTML = `${storeDisplayStr} ${displaystr} ${input}`;
    document.getElementById('display').innerHTML = '';
    displaystr = '';
    }
}

function reset(input){
  //reset was before calculate - reset everything and let user know reset is occuring
  if(!(input == 1)){

    document.getElementById('display').innerHTML = "";
  document.getElementById('reset-dialog').innerHTML = "Reset Complete";
  setTimeout(()=>{
    document.getElementById('reset-dialog').innerHTML = "";
  },3000);
  }
  document.getElementById('currentmath').innerHTML = "";
  displaystr = "";
  total = 0;
}

function dispWarning(){
  document.getElementById('warning-dialog').innerHTML = "No input to operate on";
  setTimeout(()=>{
    document.getElementById('warning-dialog').innerHTML = "";
  },3000);
}

function currentMath(input){
  if(document.getElementById('currentmath').innerHTML == ''){
    total = Number(displaystr);
    console.log(total);
    return;
  }
  switch(input){
    case '/':
    var test = total/=(Number(displaystr));
    console.log(test);
    break;
    case '+':
    total+=Number(displaystr);
    console.log(total);
    break;
    case '-':
    total-=Number(displaystr);
    console.log(total);
    break;
    case 'x':
    total *= Number(displaystr);
    console.log(total);
    break;
  }
}
function calculate(){
  //resetDisplay = true;
let getLastInput = document.getElementById('currentmath').innerHTML;
currentMath(getLastInput[getLastInput.length-1]);
console.log(getLastInput);
document.getElementById('display').innerHTML = String(total);
reset(1);
}
