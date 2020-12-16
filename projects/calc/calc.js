
let displaystr = "";
const num = document.getElementsByClassName('number');
let resetDisplay = false;
let calcArr = [];
let resetCalc = false;
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
if(resetCalc){
  displaystr= "";
  resetCalc = false;
}
displaystr += a;
document.getElementById('display').innerHTML = displaystr;
}

function action(input){
  if(displaystr=="" && calcArr.length<1){
    return;
  }
    //check and see if input is valid so far.  If so store the input thus far.
    if(!isNaN(Number(document.getElementById('display').innerHTML))){
      addToArr(input);
      let storeDisplayStr = document.getElementById('currentmath').innerHTML;
      document.getElementById('currentmath').innerHTML = `${storeDisplayStr} ${displaystr} ${input}`;
      document.getElementById('display').innerHTML = '';
      displaystr = '';
      console.log(document.getElementById('display').innerHTML);
}
    //send error message on invalid input
    else{
        setTimeout(()=>{
            document.getElementById('display').innerHTML = "";
            displaystr="";
        },2000);
        document.getElementById('display').innerHTML = "The input is not valid";
    }
}

function reset(input){
  calcArr = [];
  displaystr = "";
  document.getElementById('currentmath').innerHTML = "";
  document.getElementById('display').innerHTML = "";
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
let total = calcArr[0];
if(calcArr.length<2){
  return;
}
else{
  let input = document.getElementById('display').innerHTML;
  calcArr.push(Number(input));
  let storeDisplayStr = document.getElementById('currentmath').innerHTML;
  document.getElementById('currentmath').innerHTML = `${storeDisplayStr} ${input}`;
  for(let i =1; i<calcArr.length;i+=2){
    switch(calcArr[i]){
       case'/':
       total/=calcArr[i+1];
       console.log(total);
       break;
       case'x':
       total*=calcArr[i+1];
       break;
       case'+':
       total+=calcArr[i+1];
       break;
       case'-':
       total-=calcArr[i+1];
       break;
    }
  }
  console.log(typeof total);
  if(!isNaN(total)){
  let totalwithprec = total.toPrecision(4);
  document.getElementById('display').innerHTML = totalwithprec;
  calcArr = [];
  document.getElementById('currentmath').innerHTML = '';
  displaystr = totalwithprec;
  total =0;
  resetCalc = true;
}
    
}

}
