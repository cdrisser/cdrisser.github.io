function scrollToSection(goToSection){
       console.log(goToSection); document.getElementById(goToSection).scrollIntoView({behavior:'smooth', block:'start'})
        }

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    console.log('here')
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.getElementById("nav-header").classList.add('animate__animated', 'animate__bounceOutUp');
  } else {
    document.getElementById("nav-header").classList.remove('animate__animated', 'animate__bounceOutUp' );
  
}
}