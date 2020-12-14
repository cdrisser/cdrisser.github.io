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
    $(".resumedetails").addClass("animate__animated animate__hinge animate__slower");
    setTimeout(()=>{
        $(".resumedetails").hide();
        $(".resumedetails").removeClass("animate__animated animate__hinge animate__slower");
        $(".resumedetails").removeClass("animate__animated animate__fadeInBottomLeft");
    },3000);
    
    $(".resume").show();
    
});
$(".experience1").hover(()=>{
    $(".work-details").html("");
    $(".work-details").append("<p>&#8226 Pick up customer packages at Amazon warehouse location<br>&#8226 Deliver packages to intended destinations within an allocated time frame</p>")
});
$(".experience2").hover(()=>{
    $(".work-details").html("");
    $(".work-details").append("<p>&#8226 Led, developed, and coached 15+ employees across Academics, Finance and Admissions to achieve performance outcomes and professional development</p><p>&#8226 Developed and implemented strategic departmental coaching and performance improvement initiatives  </p> <p>&#8226 Reviewed, analyzed, and interpreted data to identify department trends, forecast future performance, and make customer service, sales, and finance related process improvement recommendation</p><p>&#8226 Identified departmental staffing needs and led candidate interview and selection process</p><p>&#8226 Audited employee financial documentation and processing to ensure an ongoing 85% quality assurance rate</p><p>&#8226 Facilitated employee engagement activities to achieve 96% employee retention</p>")
});
$(".experience3").hover(()=>{
    $(".work-details").html("");
    $(".work-details").append("<p>&#8226 Performed customer service, accounting and sales-oriented tasks including sales calls and negotiating current customer accounts.</p><p>&#8226 Resolved customer satisfaction issues and developed creative solutions to maximize customer benefit and branch profitability.</p>")
});
$(".experience4").hover(()=>{
    $(".work-details").html("");
    $(".work-details").append("<p> &#8226;<Strong> Quality Assurance Safety Officer and Collateral Duty Inspector </Strong>- ensured aircraft ordnance was safe for flight through detail orientation and final maintenance inspector to verify overall flight safety</p><p> &#8226;<Strong> Technician</Strong>- fixed weapon systems by using technical manuals and schematics under tight maintenance schedules to ensure aircraft were prepared for combat under highly stressful situations</p><p>&#8226;<Strong> Work Center Supervisor</Strong>- managed 30 Marines and prioritized maintenance schedule. Trained and evaluated staff, providing appropriate feedback regarding performance and training requirements. Identified unit objectives, organized needed resources and directed operational efforts to achieve desired results</p>")
});
});
