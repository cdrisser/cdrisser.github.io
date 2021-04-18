
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
      
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    console.log(this.classList);
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if (element_top_position <= window_bottom_position) {
      $element.addClass('animate__animated animate__slideInUp');
    } else {
      $element.removeClass('animate__animated animate__slideInUp');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');


function scrollToSection(goToSection){
       console.log(goToSection); document.getElementById(goToSection).scrollIntoView({behavior:'smooth', block:'start'})
        }

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    console.log('here')
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.getElementById("nav-header").classList.add('animate__animated', 'animate__bounceOutUp','animate__fast');
  } else {
    document.getElementById("nav-header").classList.remove('animate__animated', 'animate__bounceOutUp', 'animate__fast' );
  
}
}