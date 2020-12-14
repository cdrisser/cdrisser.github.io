
$(document).ready(()=>{
    $("#countdown").hide();
  $(".column-select").click(()=>{
  });
});
function recieveNumOfCols(num){
    //remove column in case it middle of Game
$('.col').remove();
//send number of column requested to function to dynamicaly load
  addCols(Number(num));
  //hides board while data loads from api
  $('#main-board').hide();
}
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
         $(`#category${colnum}-${i}`).css("font-size","14px");
         $(`#category${colnum}-${i}`).css("color","white");
         $(`#category${colnum}-${i}`).css("transform","scale(1.5)");

         //show the question when the question is clicked
        $(`#category${colnum}-${i}`).html(answers[i].question);
         //disable the other buttons so 1 at a time
         $("button").attr("disabled", "true");
         //show the countdown timer
         $("#countdown").show();
         let percent = 30;
         let timer = setInterval(()=>{
             $("#countdown").css("width",`${percent}%`);
             percent-=5;
             if (percent < 0){
                 clearInterval(timer);
                 $(`#category${colnum}-${i}`).html(answers[i].answer);
                 //show answer for a second transformed scale then scale back
                 setTimeout(()=>{
             $(`#category${colnum}-${i}`).css("transform","none");
                    //disable button after clicked 
                     $(`#category${colnum}-${i}`).addClass("animate__animated animate__flipOutY");
                     $(`#category${colnum}-${i}`).attr("disabled", true);
                     $("button").removeAttr("disabled");
         },1000)
             }
         },1000);
     });
      
  }
  //shows board after data loads from api
  $('#main-board').show().get(0).scrollIntoView();
    //turn off click listener since it was chosen already
    
  
}
function addCols(numCols){
  let intamt = 200;
  for(let i=0;i<numCols;i++){
    let newdiv = $(`<div class=col></div>`);
    let butcat = $(`<button class = \"square title \" id=category${i} disabled></button>`);
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
    //start at 100 (what the api allows) of categories and subtract one after its chosen to ensure no dups
    let titleNum = 100;
    console.log(ans);
  //create randomnumber between 1-100 to get random category from api
  for(let i =0; i<numCols; i++){
  const randomnumber = Math.floor(Math.random()*((titleNum--)-1)+1);
       console.log(titleNum);
  const newstr = ans[randomnumber].title.replace(/\b\w/g, title => title.toUpperCase());
  document.getElementById(`category${i}`).innerHTML = newstr;
  fetchQandAs(ans[randomnumber].id, i);
  //remove that category from possible choices so no duplicates
  ans.splice(randomnumber,1);
     
}
}
