
$(document).ready(()=>{
  $("button").click(()=>{
//remove column in case it middle of Game
$('.col').remove();
//send number of column requested to function to dynamicaly load
  addCols(Number($(document.activeElement).val()));
  //hides board while data loads from api
  $('#main-board').hide();

  });
});

async function fetchQandAs(id,i){
  const fetchstr = `https://jservice.io/api/clues?category=${id}`
  console.log(fetchstr);
  const response = await fetch(fetchstr);
  const answers = await response.json();
  loadQuestions(answers,i);
}
/*Function that load the questions and answers into the Jeopardy
buttons*/
function loadQuestions(answers,colnum){
  for(let i = 0;i<answers.length; i++){
     $(`#category${colnum}-${i}`).click(()=>{
         //adjust font from dollar sign font to reflect correct game board
         $(`#category${colnum}-${i}`).css("font-size","16px");
         $(`#category${colnum}-${i}`).css("color","white");
        $(`#category${colnum}-${i}`).html(answers[i].question);
        setTimeout(()=>{
            
          $(`#category${colnum}-${i}`).html(answers[i].answer);
        },7000)
     });
  }
  //shows board after data loads from api
  $('#main-board').show().get(0).scrollIntoView();

  
}
function addCols(numCols){
  console.log(numCols);
  let intamt = 200;
  for(let i=0;i<numCols;i++){
    let newdiv = $(`<div class=col></div>`);
    let butcat = $(`<button class = \"square title \" id=category${i}></button>`);
    newdiv.append(butcat);
    for(let j=0;j<5;j++){
      let but = $(`<button class = \"square dollaramt \" id=category${i}-${j}>$${intamt}</button>`);
      newdiv.append(but);
      intamt+=200;
    }
    intamt = 200;
    $("#each-col").append(newdiv);
     
  }
  fetchCategoryJSON().then(answers => {
  createTitle(answers, numCols);

  });
}
async function fetchCategoryJSON() {
  const response = await fetch('https://jservice.io/api/categories?count=100');
  const answers = await response.json();
  return answers;
}

function createTitle(ans, numCols){
   //add title to array so can check that it's not already been chosen
    let checkArr ={};
  
  //create randomnumber between 1-100 to get random category from api
  for(let i =0; i<numCols; i++){
  const randomnumber = Math.floor(Math.random()*(100-1)+1);
  const newstr = ans[randomnumber].title.replace(/\b\w/g, l => l.toUpperCase());
  document.getElementById(`category${i}`).innerHTML = newstr;
  fetchQandAs(ans[randomnumber].id, i);
  //remove that category from possible choices so no duplicates
  ans.splice(randomnumber,1);
     
}
}
