
$(document).ready(function(){
	$(".ui-item2-top1").css('background-color','#c0c0c0');
	$(".ui-item2-body").text('first');

	$(".ui-item2-top1").click(function(){
		$(".ui-item2-top1").css('background-color','#c0c0c0');
		$(".ui-item2-top2").css('background-color','#ffffff');
		$(".ui-item2-top3").css('background-color','#ffffff');
		$(".ui-item2-body").text('first');
	});

	$(".ui-item2-top2").click(function(){
		$(".ui-item2-top1").css('background-color','#ffffff');
		$(".ui-item2-top2").css('background-color','#c0c0c0');
		$(".ui-item2-top3").css('background-color','#ffffff');
		$(".ui-item2-body").text('second');
	});

	$(".ui-item2-top3").click(function(){
		$(".ui-item2-top1").css('background-color','#ffffff');
		$(".ui-item2-top2").css('background-color','#ffffff');
		$(".ui-item2-top3").css('background-color','#c0c0c0');
		$(".ui-item2-body").text('third');
	});


});


