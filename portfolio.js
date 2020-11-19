$(document).ready(()=>{
$(".resumedetails").hide();
    
	$(".resume").click(()=>{
		$(".resume").hide();
        $(".resumedetails").show().addClass("animate__animated animate__fadeInBottomLeft")
	});
$(".close-resume").click(()=>{
    $(".resumedetails").addClass("animate__animated animate__hinge");
    setTimeout(()=>{
        $(".resumedetails").hide();
        $(".resumedetails").removeClass("animate__animated animate__hinge");
        $(".resumedetails").removeClass("animate__animated animate__fadeInBottomLeft");
    },1500);
    
    $(".resume").show();
    
});

});
