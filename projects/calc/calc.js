
let displaystr = "";
let total =0;
const num = document.getElementsByClassName('number');
let resetDisplay = false;
let calcArr = [];
//creates border so user can see what button they pushed
for(var i=0; i<num.length; i++){
num[i].addEventListener("mousedown", (event)=>{
  event.target.style.border = "2px solid black";
})}
//removes border after push
for(var i=0; i<num.length; i++){
num[i].addEventListener("mouseup", (event)=>{
  event.target.style.border = "";
})}

function operation(a=""){
    displaystr += a;
    document.getElementById('display').innerHTML = displaystr;

}

function action(input){
  if(displaystr==""&&calcArr.length<1){
    return;
  }
    addToArr(input);
    let storeDisplayStr = document.getElementById('currentmath').innerHTML;
    document.getElementById('currentmath').innerHTML = `${storeDisplayStr} ${displaystr} ${input}`;
    document.getElementById('display').innerHTML = '';
    displaystr = '';
    console.log(document.getElementById('display').innerHTML);

}

function reset(input){
}
//adds number and operation to arraylist
function addToArr(input){
  if(displaystr == ""){
    let storeDisplayStr = document.getElementById('currentmath').innerHTML;
    let newStoreDisplayStr = storeDisplayStr.slice(0,storeDisplayStr.length-1);
    document.getElementById('currentmath').innerHTML = newStoreDisplayStr;
    calcArr.pop();
    calcArr.push(input);
    console.log(`calcArr is ${calcArr}`);
    return;
  }
  calcArr.push(Number(document.getElementById('display').innerHTML));
  calcArr.push(input);
  console.log(`calcArr is ${calcArr}`);
}

function calculate(){

}
