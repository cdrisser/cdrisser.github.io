const closeEle= document.querySelector('.sidedrawer-close');
const ele =  document.getElementById('sidedrawer');
const hamBut = document.querySelector('.hamburger-button');

const openSideDrawer = ()=>{
    
    document.querySelector('#overlay').style.display = 'block';
    
    hamBut.classList.add("animate__animated","animate__rotateOut", "animate__fast");
    
    ele.style.display = 'flex';
    ele.classList.add("animate__animated","animate__slideInRight", "animate__faster");
    closeEle.classList.add("animate__animated","animate__rotateIn", "animate__slower");
    closeEle.style.display='flex';
    
    
    closeEle.addEventListener('animationend',()=>{
        hamBut.style.display="none";
        hamBut.classList.remove("animate__animated","animate__rotateOut", "animate__fast");
        ele.classList.remove("animate__animated","animate__slideInRight", "animate__faster");
        closeEle.classList.remove("animate__animated","animate__rotateIn", "animate__slower");
        })
    
}
const closeSideDrawer = ()=>{
    
    document.querySelector('#overlay').style.display = 'none';
    
    closeEle.classList.add("animate__animated","animate__rotateOut", "animate__slower");
    
    ele.classList.add("animate__animated","animate__slideOutRight", "animate__faster");
    
    hamBut.classList.add("animate__animated","animate__rotateIn", "animate__slower");
    hamBut.style.display='flex';
    
    ele.addEventListener('animationend',()=>{
        ele.style.display="none";
        closeEle.style.display="none";
        
       
       
        })

}


function scrollToSection(goToSection){
       console.log(goToSection); document.getElementById(goToSection).scrollIntoView({behavior:'smooth', block:'start'})
        }

window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.getElementById("nav-header").classList.add('animate__animated', 'animate__bounceOutUp','animate__fast');
  } else {
    document.getElementById("nav-header").classList.remove('animate__animated', 'animate__bounceOutUp', 'animate__fast' );
  
}
}