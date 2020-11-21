$(document).ready(()=>{
$(".resumedetails").hide();
$(".amazon").hide();
$(".art").hide();
$(".neighborhood").hide();
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
$("amazon").mouseover(()=>{
    $(".neighborhood").hide();
    $(".usmc").hide();
    $(".art").hide();
    $(".amazon").show();
});
$(".art").mouseenter(()=>{
    $(".neighborhood").hide();
    $(".usmc").hide();
    $(".amazon").hide();
});
$(".neighborhood").mouseenter(()=>{
    $(".amazon").hide();
    $(".usmc").hide();
    $(".art").hide();
});
});
