$(document).ready(()=>{
$(".resumedetails").hide();
	$(".resume").click(()=>{
		$(".resume").hide();
        $(".resumedetails").show().animate({
      left: '25%',
      opacity: '1',
      width: '100vh',
      height: '100vh'
    },1500);
	});
$(".close-resume").click(()=>{
    $(".resumedetails").hide();
    $(".resume").show();
})
});