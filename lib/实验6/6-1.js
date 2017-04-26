$(document).ready(function(){
	// $(".ui-body-top-1").click(function(){
	// 	$(".ui-body-top-p-1").fadeToggle();
	// })


	
	// $(".ui-body-top-2").click(function(){
	// 	$(".ui-body-top-p-2").fadeToggle();
	// })
	// $(".ui-body-top-3").click(function(){
	// 	$(".ui-body-top-p-3").fadeToggle();
	// })
	// $(".ui-body-top-4").click(function(){
	// 	$(".ui-body-top-p-4").fadeToggle();
	// })
	// $(".ui-body-top-5").click(function(){
	// 	$(".ui-body-top-p-5").fadeToggle();
	// })
	// $(".ui-body-bottom-1").click(function(){
	// 	$(".ui-body-bottom-p-1").fadeToggle();
	// })
	// $(".ui-body-bottom-2").click(function(){
	// 	$(".ui-body-bottom-p-2").fadeToggle();
	// })
	// $(".ui-body-bottom-3").click(function(){
	// 	$(".ui-body-bottom-p-3").fadeToggle();
	// })
	// $(".ui-body-bottom-4").click(function(){
	// 	$(".ui-body-bottom-p-4").fadeToggle();
	// })
	// $(".ui-body-bottom-5").click(function(){
	// 	$(".ui-body-bottom-p-5").fadeToggle();
	// })

	$(".ui-item1-background").hide();
	$(".picture")click(showing);
	$(".ui-item1-background").click(function(){
		$(".ui-item1-background").hide();
	});

	function showing(e){
		$(".ui-item1-background").fadeIn();
		var getting = $(e.target).attr("src");
		$(".img-bg") .attr("src",getting);
	}
});


