const closeEle= document.querySelector('.sidedrawer-close');
 const ele1 =  document.getElementById('sidedrawer');
const hamBut = document.querySelector('.hamburger-button');
 const loadpage = document.getElementById('onloadanimation');
 const loadlogo = document.querySelector('.load-logo');


setTimeout(()=>{
    loadlogo.classList.add("animate__animated","animate__bounceOutDown")
    
    
    
    loadlogo.addEventListener('animationend',()=>{
    loadlogo.classList.remove("animate__animated","animate__bounceOutDown")
    loadpage.style.display = 'none';
    document.body.classList.add("animate__animated", "animate__bounceInUp")
    },{once:true});
    
},1500);



const openSideDrawer = ()=>{
   
    document.querySelector('#overlay').style.display = 'block';
    
    hamBut.classList.add("animate__animated","animate__rotateOut");
    
    ele1.style.display = 'flex';
    ele1.classList.add("animate__animated","animate__slideInRight");
    closeEle.classList.add("animate__animated","animate__rotateIn");
    closeEle.style.display='flex';
    
        ele1.addEventListener('animationend',()=>{
            console.log("here1")
        hamBut.style.display="none";
        hamBut.classList.remove("animate__animated","animate__rotateOut");
        ele1.classList.remove("animate__animated","animate__slideInRight" );
        closeEle.classList.remove("animate__animated","animate__rotateIn");
        },{once:true});
        
       
       
    }

    
    

const closeSideDrawer = ()=>{
    document.querySelector('#overlay').style.display = 'none';
    
    closeEle.classList.add("animate__animated","animate__rotateOut");
    
    
    ele1.classList.add("animate__animated","animate__slideOutRight");
    hamBut.classList.add("animate__animated","animate__rotateIn");
    hamBut.style.display ='flex';
    
        ele1.addEventListener('animationend',()=>{
            closeEle.style.display='none';
        ele1.style.display = 'none';
        
        closeEle.style.display="none";
         closeEle.classList.remove("animate__animated","animate__rotateOut");
        ele1.classList.remove("animate__animated","animate__slideOutRight");
        hamBut.classList.remove("animate__animated","animate__rotateIn");
        },{once:true})
   
      
  
         
    }
    




function scrollToSection(goToSection){
      document.getElementById(goToSection).scrollIntoView({behavior:'smooth', block:'start'})
    closeSideDrawer();
        }

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    document.body.classList.remove("animate__animated", "animate__bounceInUp")

  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.getElementById("nav-header").classList.add('animate__animated', 'animate__bounceOutUp','animate__fast');
  } else {
    document.getElementById("nav-header").classList.remove('animate__animated', 'animate__bounceOutUp', 'animate__fast' );
  
}
}