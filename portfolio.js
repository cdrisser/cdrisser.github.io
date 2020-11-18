$(document).ready(()=>{
$(".resumedetails").hide();
    
	$(".resume").click(()=>{
		$(".resume").hide();
        $(".resumedetails").show().addClass("animate__animated animate__fadeInBottomLeft")
	});
$(".close-resume").click(()=>{
    $(".resumedetails").addClass("animate__animated animate__fadeOutBottomLeft");
    setTimeout(()=>{
        $(".resumedetails").hide();
        $(".resumedetails").removeClass("animate__animated animate__fadeOutBottomLeft");
    },500);
    
    $(".resume").show();
    
});

});
